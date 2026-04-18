try {
  if ([enum]::GetNames([Net.SecurityProtocolType]) -contains 'Tls12') {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  }
} catch {
}

$keyLimeTitle = [string]::Concat('Citrus ', [char]0x00D7, ' aurantiifolia.jpg')
$thumbnailWidth = 1200
$delayMilliseconds = 1200
$rateLimitPauseSeconds = 75
$maxRateLimitRetries = 2

$items = @(
  @{ RelativePath = 'plants/white-oak.jpg'; Titles = @('White Oak Tree.jpg') },
  @{ RelativePath = 'plants/pin-oak.jpg'; Titles = @('Pin Oak (31290390796).jpg') },
  @{ RelativePath = 'plants/live-oak.jpg'; Titles = @('Fairchild Oak -- Live Oak.jpg') },
  @{ RelativePath = 'plants/tulip-tree.jpg'; Titles = @('Liriodendron tulipifera (2).jpg') },
  @{ RelativePath = 'plants/american-sycamore.jpg'; Titles = @('Platanus occidentalis (32318633413).jpg') },
  @{ RelativePath = 'plants/american-elm.jpg'; Titles = @('American elm (25048497086).jpg') },
  @{ RelativePath = 'plants/blue-spruce.jpg'; Titles = @('20200602 183335 Blue spruce.jpg') },
  @{ RelativePath = 'plants/douglas-fir.jpg'; Titles = @('Douglas fir tree.jpg') },
  @{ RelativePath = 'plants/japanese-black-pine.jpg'; Titles = @('Pinus thunbergii (Japanese Black Pine) (26532118401).jpg') },
  @{ RelativePath = 'plants/strawberry.jpg'; Titles = @('Strawberry Plant.jpg') },
  @{ RelativePath = 'plants/blackberry.jpg'; Titles = @('Blackberry plants.JPG') },
  @{ RelativePath = 'plants/raspberry.jpg'; Titles = @('Raspberry Plant.jpg') },
  @{ RelativePath = 'plants/fig.jpg'; Titles = @('Ficus carica.jpg') },
  @{ RelativePath = 'plants/apple-tree.jpg'; Titles = @('Apple Tree.jpg', 'Apple tree.jpg', 'Apple-tree.jpg', 'Apples on an Apple Tree.jpg') },
  @{ RelativePath = 'plants/pear-tree.jpg'; Titles = @('A Pear tree.jpg') },
  @{ RelativePath = 'plants/peach-tree.jpg'; Titles = @('Peach tree.JPG') },
  @{ RelativePath = 'plants/plum-tree.jpg'; Titles = @('Plum tree.jpg', 'Plum Tree.jpg') },
  @{ RelativePath = 'plants/cherry-tree.jpg'; Titles = @('Cherry trees.jpg') },
  @{ RelativePath = 'plants/pomegranate-tree.jpg'; Titles = @('Pomegranate tree.JPG', 'Pomegranate Tree.jpg', 'Home Pomegranate Tree.jpg', 'Pomegranate tree.jpg') },
  @{ RelativePath = 'plants/hardy-kiwi.jpg'; Titles = @('Kiwifruit on vine.JPG') },
  @{ RelativePath = 'plants/valencia-orange-tree.jpg'; Titles = @('Valencia orange tree.jpg') },
  @{ RelativePath = 'plants/orange-tree.jpg'; Titles = @('Orange Tree.jpg', 'An Orange Tree.jpg') },
  @{ RelativePath = 'plants/mandarin-orange-tree.jpg'; Titles = @('Mandarin Orange Tree.jpg', 'Mandarin orange tree.jpg') },
  @{ RelativePath = 'plants/lemon-tree.jpg'; Titles = @('A lemon tree.jpg', 'A lemon-tree.jpg', 'Green Lemon on a Lemon Tree.JPG') },
  @{ RelativePath = 'plants/bearss-lime.jpg'; Titles = @('Citrus latifolia.jpg') },
  @{ RelativePath = 'plants/key-lime.jpg'; Titles = @($keyLimeTitle, 'Starr 080610-8303 Citrus aurantiifolia.jpg') },
  @{ RelativePath = 'plants/grapefruit-ruby-red.jpg'; Titles = @('Three year old Buckeye grapefruit tree.jpg') },
  @{ RelativePath = 'plants/cranberry-pilgrim.png'; Titles = @('Cranberry Fruit.png') }
)

function Get-WikimediaApiThumbnailUrls {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Title,
    [Parameter(Mandatory = $true)]
    [int]$Width
  )

  $apiTitle = [uri]::EscapeDataString("File:$Title")
  $uri = "https://commons.wikimedia.org/w/api.php?action=query&titles=$apiTitle&prop=imageinfo&iiprop=url&iiurlwidth=$Width&format=json&formatversion=2"

  try {
    $response = Invoke-RestMethod `
      -Uri $uri `
      -Headers @{ 'User-Agent' = 'PlantPlanner remote image downloader'; 'Accept' = 'application/json' } `
      -ErrorAction Stop

    $pages = @($response.query.pages)
    foreach ($page in $pages) {
      if ($page.missing) {
        continue
      }

      $info = @($page.imageinfo)[0]
      $urls = @()
      if ($info.thumburl) {
        $urls += [string]$info.thumburl
      }
      if ($info.url) {
        $urls += [string]$info.url
      }

      $urls = $urls | Where-Object { $_ } | Select-Object -Unique
      if ($urls.Count -gt 0) {
        return $urls
      }
    }
  } catch {
  }

  return @()
}

function Get-WikimediaThumbnailUrls {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Title,
    [Parameter(Mandatory = $true)]
    [int]$Width
  )

  $encodedTitle = [uri]::EscapeDataString($Title)
  return @(
    "https://commons.wikimedia.org/wiki/Special:FilePath/$encodedTitle?width=$Width",
    "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/$encodedTitle&width=$Width"
  )
}

function Get-DownloadErrorMessage {
  param(
    [Parameter(Mandatory = $true)]
    [System.Exception]$Exception
  )

  if ($Exception.PSObject.Properties.Name -contains 'Response' -and $Exception.Response) {
    try {
      $statusCode = [int]$Exception.Response.StatusCode
      $statusText = $Exception.Response.StatusDescription
      return "HTTP $statusCode $statusText"
    } catch {
    }
  }

  return $Exception.Message
}

function Test-IsRateLimitError {
  param(
    [string]$Message
  )

  return [bool]($Message -match '429|Too Many Requests')
}

function Download-WikimediaAsset {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Uri,
    [Parameter(Mandatory = $true)]
    [string]$OutFile
  )

  $tempFile = "$OutFile.download"
  if (Test-Path -LiteralPath $tempFile) {
    Remove-Item -LiteralPath $tempFile -Force -ErrorAction SilentlyContinue
  }

  $methodErrors = @()

  if (Get-Command curl.exe -ErrorAction SilentlyContinue) {
    try {
      & curl.exe `
        --http1.1 `
        -L `
        --fail `
        --retry 5 `
        --retry-delay 2 `
        --retry-all-errors `
        --connect-timeout 20 `
        --max-time 180 `
        -A "PlantPlanner remote image downloader" `
        -H "Accept: image/*,*/*;q=0.8" `
        -o $tempFile `
        $Uri

      if ($LASTEXITCODE -eq 0) {
        Move-Item -LiteralPath $tempFile -Destination $OutFile -Force
        return $null
      }

      throw "curl.exe failed with exit code $LASTEXITCODE"
    } catch {
      $methodErrors += "curl: $(Get-DownloadErrorMessage -Exception $_.Exception)"
      if (Test-Path -LiteralPath $tempFile) {
        Remove-Item -LiteralPath $tempFile -Force -ErrorAction SilentlyContinue
      }
    }
  }

  try {
    Invoke-WebRequest `
      -Uri $Uri `
      -OutFile $tempFile `
      -MaximumRedirection 10 `
      -Headers @{ 'User-Agent' = 'PlantPlanner remote image downloader'; 'Accept' = 'image/*,*/*;q=0.8' } `
      -ErrorAction Stop

    Move-Item -LiteralPath $tempFile -Destination $OutFile -Force
    return $null
  } catch {
    $methodErrors += "iwr: $(Get-DownloadErrorMessage -Exception $_.Exception)"
    if (Test-Path -LiteralPath $tempFile) {
      Remove-Item -LiteralPath $tempFile -Force -ErrorAction SilentlyContinue
    }
  }

  if (Get-Command Start-BitsTransfer -ErrorAction SilentlyContinue) {
    try {
      Start-BitsTransfer -Source $Uri -Destination $tempFile -DisplayName "PlantPlanner image download" -Description "Downloading image asset" -ErrorAction Stop
      Move-Item -LiteralPath $tempFile -Destination $OutFile -Force
      return $null
    } catch {
      $methodErrors += "bits: $(Get-DownloadErrorMessage -Exception $_.Exception)"
      if (Test-Path -LiteralPath $tempFile) {
        Remove-Item -LiteralPath $tempFile -Force -ErrorAction SilentlyContinue
      }
    }
  }

  return ($methodErrors -join ' | ')
}

$imagesRoot = Join-Path $PSScriptRoot 'images'
$failures = @()

foreach ($item in $items) {
  $outFile = Join-Path $imagesRoot $item.RelativePath
  $outDir = Split-Path -Parent $outFile
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null

  if (Test-Path -LiteralPath $outFile) {
    Write-Host "Skipping existing $($item.RelativePath)..."
    continue
  }

  $downloaded = $false
  $attemptMessages = @()

  foreach ($title in @($item.Titles)) {
    $candidateUris = @(
      @(Get-WikimediaApiThumbnailUrls -Title $title -Width $thumbnailWidth)
      @(Get-WikimediaThumbnailUrls -Title $title -Width $thumbnailWidth)
    ) | Where-Object { $_ } | Select-Object -Unique

    foreach ($uri in $candidateUris) {
      Write-Host "Downloading $($item.RelativePath) from $title..."

      $errorMessage = $null
      for ($retryIndex = 0; $retryIndex -le $maxRateLimitRetries; $retryIndex++) {
        $errorMessage = Download-WikimediaAsset -Uri $uri -OutFile $outFile
        if (-not $errorMessage) {
          break
        }

        if ((Test-IsRateLimitError -Message $errorMessage) -and $retryIndex -lt $maxRateLimitRetries) {
          Write-Host "Rate limited by Wikimedia. Waiting $rateLimitPauseSeconds seconds before retrying..."
          Start-Sleep -Seconds $rateLimitPauseSeconds
          continue
        }

        break
      }

      if (-not $errorMessage) {
        $downloaded = $true
        break
      }

      $attemptMessages += "${title}: $errorMessage"
    }

    if ($downloaded) {
      break
    }
  }

  if (-not $downloaded) {
    if (Test-Path -LiteralPath $outFile) {
      Remove-Item -LiteralPath $outFile -Force -ErrorAction SilentlyContinue
    }

    $failures += [PSCustomObject]@{
      File = $item.RelativePath
      Error = ($attemptMessages -join ' | ')
    }
  }

  Start-Sleep -Milliseconds $delayMilliseconds
}

Write-Host ""
Write-Host "Done. Saved files under $imagesRoot"
Get-ChildItem -LiteralPath (Join-Path $imagesRoot 'plants') | Sort-Object Name | Select-Object Name, Length

if ($failures.Count -gt 0) {
  Write-Host ""
  Write-Host "Failed downloads:"
  $failures | Format-Table -Wrap -AutoSize
}
