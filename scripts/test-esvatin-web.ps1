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
    "內部培訓",
    "網站模式",
    "簡報模式",
    "簡報頁次"
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
    "body.is-presentation-mode",
    ".presentation-toolbar"
)

foreach ($needle in $cssChecks) {
    if (-not $css.Contains($needle)) {
        throw "CSS is missing expected marker: $needle"
    }
}

$jsChecks = @(
    "internal",
    "external",
    "presentation",
    "setViewMode",
    "goToSlide",
    "簡報模式"
)

foreach ($needle in $jsChecks) {
    if (-not $js.Contains($needle)) {
        throw "JavaScript is missing expected marker: $needle"
    }
}

Write-Host "PASS: Esvatin web presentation files and markers are in place."
