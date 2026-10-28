$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$artifactRoot = Join-Path $projectRoot 'artifacts'
$packageId = [Guid]::NewGuid().ToString('N').Substring(0, 8)
$stagingRoot = Join-Path $artifactRoot "handoff-stage-$packageId"
$packageRoot = Join-Path $stagingRoot 'Vishwjeet-Portfolio'
$archivePath = Join-Path $artifactRoot "Vishwjeet-Portfolio-Source-$packageId.zip"

# Explicit allowlist: never include Git history, installed packages, secrets,
# machine-specific build output, test artifacts, or earlier ZIPs.
$includedPaths = @(
    'src', 'public', 'scripts', 'tests',
    '.env.example', '.gitignore', '.nvmrc',
    'package.json', 'package-lock.json', 'index.html',
    'tsconfig.json', 'vite.config.ts', 'vercel.json', 'playwright.config.ts',
    'README.md', 'START-HERE.md', 'requirements.txt', 'setup.cmd', 'start.cmd'
)

New-Item -ItemType Directory -Path $packageRoot -Force | Out-Null
foreach ($relativePath in $includedPaths) {
    $sourcePath = Join-Path $projectRoot $relativePath
    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Missing required handoff file: $relativePath"
    }
    Copy-Item -LiteralPath $sourcePath -Destination $packageRoot -Recurse -Force
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($stagingRoot, $archivePath)
$archive = [System.IO.Compression.ZipFile]::OpenRead($archivePath)
try {
    if ($archive.Entries.FullName -match '(^|/)(node_modules|\.git|dist|artifacts|test-results|\.env\.local)(/|$)') {
        throw 'Unexpected private or generated content in archive.'
    }
    Write-Output "Archive: $archivePath"
    Write-Output "Files: $($archive.Entries.Count)"
} finally {
    $archive.Dispose()
}
Write-Output "SHA256: $((Get-FileHash -LiteralPath $archivePath -Algorithm SHA256).Hash)"
