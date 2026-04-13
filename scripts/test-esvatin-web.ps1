$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$siteDir = Join-Path $root "site"
$htmlPath = Join-Path $siteDir "index.html"
$cssPath = Join-Path $siteDir "styles.css"
$jsPath = Join-Path $siteDir "app.js"

$requiredFiles = @($htmlPath, $cssPath, $jsPath)
foreach ($path in $requiredFiles) {
    if (-not (Test-Path -LiteralPath $path)) {
        throw "Missing required site file: $path"
    }
}

$html = Get-Content -Raw -LiteralPath $htmlPath
$css = Get-Content -Raw -LiteralPath $cssPath
$js = Get-Content -Raw -LiteralPath $jsPath

$htmlChecks = @(
    "data-version-toggle",
    "hero-title",
    "reading-path",
    "section-nav",
    "takeaway-cards"
)

foreach ($needle in $htmlChecks) {
    if (-not $html.Contains($needle)) {
        throw "HTML is missing expected marker: $needle"
    }
}

$cssChecks = @(
    "scroll-margin-top",
    ".section-nav a::before",
    ".section-nav a:hover",
    ".version-button.is-active",
    ".bar-fill"
)

foreach ($needle in $cssChecks) {
    if (-not $css.Contains($needle)) {
        throw "CSS is missing expected marker: $needle"
    }
}

$jsChecks = @(
    "contentByVersion",
    "internal",
    "external",
    "renderSections",
    "renderList",
    "data-version-toggle"
)

foreach ($needle in $jsChecks) {
    if (-not $js.Contains($needle)) {
        throw "JavaScript is missing expected marker: $needle"
    }
}

Write-Host "PASS: Esvatin web presentation files and markers are in place."
