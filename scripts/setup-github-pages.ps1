$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root

function Write-Step {
    param([string]$Message)
    Write-Host "[setup] $Message"
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git is not installed or not available in PATH."
}

$insideRepo = Test-Path -LiteralPath (Join-Path $root ".git")

if (-not $insideRepo) {
    Write-Step "Initializing a new Git repository on branch main"
    git init -b main
}
else {
    Write-Step "Git repository already initialized"
}

$hasCommit = Test-Path -LiteralPath (Join-Path $root ".git\refs\heads\main")

git add .

if (-not $hasCommit) {
    Write-Step "Creating the initial commit"
    git commit -m "chore: initialize repository and add pages deployment"
}
else {
    Write-Step "Repository already has commits; staged current changes only"
}

Write-Host ""
Write-Host "Next GitHub steps:"
Write-Host "1. Create or authenticate a GitHub repository named work_research."
Write-Host "2. Add the remote:"
Write-Host '   git remote add origin https://github.com/<your-account>/work_research.git'
Write-Host "3. Push the branch:"
Write-Host "   git push -u origin main"
Write-Host "4. In GitHub, open Settings > Pages and confirm GitHub Actions is the source."
