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
    "presentation-mode",
    "presentation-internal",
    "presentation-external",
    "slide-counter",
    "hero-title"
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
    ".bar-fill",
    "body.is-presentation-mode",
    ".presentation-toolbar"
)

foreach ($needle in $cssChecks) {
    if (-not $css.Contains($needle)) {
        throw "CSS is missing expected marker: $needle"
    }
}

$jsChecks = @(
    "contentByVersion",
    "renderSite",
    "renderPresentation",
    "setViewMode",
    "goToSlide",
    "setVersion(""internal"")",
    "data-version-toggle"
)

foreach ($needle in $jsChecks) {
    if (-not $js.Contains($needle)) {
        throw "JavaScript is missing expected marker: $needle"
    }
}

$requiredTeachingMarkers = @(
    "Product Fact",
    "Class-Level Evidence",
    "Use with caution",
    "What to say",
    "What not to say"
)

foreach ($needle in $requiredTeachingMarkers) {
    if (-not ($html.Contains($needle) -or $js.Contains($needle))) {
        throw "Training site is missing expected teaching marker: $needle"
    }
}

$requiredCleanMarkers = @(
    "PM Training Console",
    "Evidence boundary",
    "Product Fact",
    "Class-Level Evidence",
    "What to say",
    "What not to say"
)

foreach ($needle in $requiredCleanMarkers) {
    if (-not ($html.Contains($needle) -or $js.Contains($needle))) {
        throw "Site is missing expected clean content marker: $needle"
    }
}

Write-Host "PASS: Esvatin web presentation files and markers are in place."
