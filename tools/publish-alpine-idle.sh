#!/usr/bin/env bash
# Build Alpine Idle (Vite) and copy its dist/ into ./alpine-idle/ (no commit, no push).
# Usage: tools/publish-alpine-idle.sh [path-to-alpine-idle-repo]   (default: ~/Sites/alpine-idle)
set -euo pipefail
SRC="${1:-$HOME/Sites/alpine-idle}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/alpine-idle"
[ -f "$SRC/package.json" ] && grep -q '"name": "alpine-idle"' "$SRC/package.json" || { echo "not an Alpine Idle checkout: $SRC" >&2; exit 1; }
(cd "$SRC" && { [ -d node_modules ] || npm ci; } && npm run build)
[ -f "$SRC/dist/index.html" ] || { echo "build produced no dist/index.html" >&2; exit 1; }
mkdir -p "$DEST"
rsync -a --delete --exclude='.DS_Store' "$SRC/dist/" "$DEST/"
# keep the tile's version in index.html in sync with the published build
VER="$(node -p "require('$SRC/package.json').version")"
perl -0pi -e 's|(href:"alpine-idle/",version:")[^"]*(")|${1}'"$VER"'${2}|' "$DEST/../index.html"
echo "Published alpine-idle $VER -> $DEST ($(find "$DEST" -type f | wc -l | tr -d ' ') files, $(du -sh "$DEST" | cut -f1))"
git -C "$DEST/.." status --short
