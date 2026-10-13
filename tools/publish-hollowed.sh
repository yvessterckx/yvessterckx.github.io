#!/usr/bin/env bash
# Build Hollowed (Vite) and copy its dist/ into ./hollowed/ (no commit, no push).
# Usage: tools/publish-hollowed.sh [path-to-hollowed-repo]   (default: ~/Sites/hollowed)
set -euo pipefail
SRC="${1:-$HOME/Sites/hollowed}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/hollowed"
[ -f "$SRC/package.json" ] || { echo "not a Hollowed checkout: $SRC" >&2; exit 1; }
(cd "$SRC" && { [ -d node_modules ] || npm ci; } && npm run build)
[ -f "$SRC/dist/index.html" ] || { echo "build produced no dist/index.html" >&2; exit 1; }
mkdir -p "$DEST"
rsync -a --delete "$SRC/dist/" "$DEST/"
# keep the tile's version in index.html in sync with the published build
VER="$(node -p "require('$SRC/package.json').version")"
perl -0pi -e 's|(href:"hollowed/",version:")[^"]*(")|${1}'"$VER"'${2}|' "$DEST/../index.html"
echo "Published hollowed -> $DEST ($(find "$DEST" -type f | wc -l | tr -d ' ') files, $(du -sh "$DEST" | cut -f1))"
git -C "$DEST/.." status --short
