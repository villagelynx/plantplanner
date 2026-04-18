$items = @(
  @{ Dest = 'lavender.jpg'; Title = 'Natural lavender.jpg' },
  @{ Dest = 'hydrangea.jpg'; Title = 'Hydrangea (49747346081).jpg' },
  @{ Dest = 'rosemary.jpg'; Title = 'Rosemary (390003562).jpg' },
  @{ Dest = 'coneflower.jpg'; Title = 'Pale purple coneflower (54699458585).jpg' },
  @{ Dest = 'hosta.jpg'; Title = 'Hosta.jpg' },
  @{ Dest = 'japanese-maple.jpg'; Title = 'Hever Castle Japanese maple.JPG' },
  @{ Dest = 'snake-plant.jpg'; Title = 'The snake plant.jpg' },
  @{ Dest = 'monstera.jpg'; Title = 'Indoor Monstera deliciosa.jpg' },
  @{ Dest = 'pothos.jpg'; Title = 'Pothos.jpg' },
  @{ Dest = 'peace-lily.jpg'; Title = 'Spathiphyllum (4479608470).jpg' },
  @{ Dest = 'boston-fern.png'; Title = 'Boston Fern (2874222232).png' },
  @{ Dest = 'petunia.jpg'; Title = 'Petunia.jpg' },
  @{ Dest = 'marigold.jpg'; Title = 'Marigold flower .jpg' },
  @{ Dest = 'zinnia.jpg'; Title = 'Zinnia.jpg' },
  @{ Dest = 'sunflower.jpg'; Title = 'Single Sunflower.jpg' },
  @{ Dest = 'boxwood.jpg'; Title = 'Box.jpg' },
  @{ Dest = 'dogwood.jpg'; Title = 'Blooming Dogwood.jpg' },
  @{ Dest = 'blueberry.jpg'; Title = 'Blueberries.jpg' },
  @{ Dest = 'tomato.jpg'; Title = 'Tomato plant.jpg' },
  @{ Dest = 'aloe-vera.jpg'; Title = 'Aloe Vera.jpg' }
)

$destDir = Join-Path $PSScriptRoot 'images\popular'
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

$failures = @()

foreach ($item in $items) {
  $outFile = Join-Path $destDir $item.Dest

  if (Test-Path $outFile) {
    Write-Host "Skipping existing $($item.Dest)..."
    continue
  }

  $encoded = [uri]::EscapeDataString($item.Title)
  $uri = "https://commons.wikimedia.org/wiki/Special:FilePath/$encoded"

  try {
    Write-Host "Downloading $($item.Dest)..."
    if (Get-Command curl.exe -ErrorAction SilentlyContinue) {
      & curl.exe -L --fail --retry 2 --retry-delay 1 -A "PlantPlanner popular image downloader" -o $outFile $uri
      if ($LASTEXITCODE -ne 0) {
        throw "curl.exe failed with exit code $LASTEXITCODE"
      }
    } else {
      Invoke-WebRequest -Uri $uri -OutFile $outFile -MaximumRedirection 5 -Headers @{ 'User-Agent' = 'PlantPlanner popular image downloader' } -ErrorAction Stop
    }
  } catch {
    $failures += [PSCustomObject]@{
      File = $item.Dest
      Title = $item.Title
      Error = $_.Exception.Message
    }
  }

  Start-Sleep -Milliseconds 200
}

Write-Host ""
Write-Host "Done. Saved files to $destDir"
Get-ChildItem $destDir | Sort-Object Name | Select-Object Name, Length

if ($failures.Count -gt 0) {
  Write-Host ""
  Write-Host "Failed downloads:"
  $failures | Format-Table -AutoSize
}
