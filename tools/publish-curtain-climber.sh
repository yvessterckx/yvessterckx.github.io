#!/usr/bin/env bash
# Build Curtain Climber (Vite) and copy its dist/ into ./curtain-climber/ (no commit, no push).
# Usage: tools/publish-curtain-climber.sh [path-to-game-repo]   (default: ~/Sites/curtain-climber)
set -euo pipefail
SRC="${1:-$HOME/Sites/curtain-climber}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/curtain-climber"
[ -f "$SRC/package.json" ] && grep -q '"name": "curtain-climber"' "$SRC/package.json" || { echo "not a Curtain Climber checkout: $SRC" >&2; exit 1; }
(cd "$SRC" && { [ -d node_modules ] || npm ci; } && npm run build)
[ -f "$SRC/dist/index.html" ] || { echo "build produced no dist/index.html" >&2; exit 1; }
mkdir -p "$DEST"
rsync -a --delete --exclude='.DS_Store' "$SRC/dist/" "$DEST/"
# keep the tile's version in index.html in sync with the published build
VER="$(node -p "require('$SRC/package.json').version")"
perl -0pi -e 's|(href:"curtain-climber/",version:")[^"]*(")|${1}'"$VER"'${2}|' "$DEST/../index.html"
echo "Published curtain-climber $(grep -o '"version": "[^"]*"' "$SRC/package.json") -> $DEST ($(find "$DEST" -type f | wc -l | tr -d ' ') files, $(du -sh "$DEST" | cut -f1))"
git -C "$DEST/.." status --short
