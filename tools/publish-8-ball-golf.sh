#!/usr/bin/env bash
# Build 8 Ball Golf (Vite) and copy its dist/ into ./8-ball-golf/ (no commit, no push).
# Usage: tools/publish-8-ball-golf.sh [path-to-8-ball-golf-repo]   (default: ~/Sites/8-ball-golf)
set -euo pipefail
SRC="${1:-$HOME/Sites/8-ball-golf}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/8-ball-golf"
[ -f "$SRC/package.json" ] || { echo "not an 8 Ball Golf checkout: $SRC" >&2; exit 1; }
(cd "$SRC" && { [ -d node_modules ] || npm ci; } && npm run build)
[ -f "$SRC/dist/index.html" ] || { echo "build produced no dist/index.html" >&2; exit 1; }
mkdir -p "$DEST"
rsync -a --delete "$SRC/dist/" "$DEST/"
# keep the tile's version in index.html in sync with the published build
VER="$(node -p "require('$SRC/package.json').version")"
perl -0pi -e 's|(href:"8-ball-golf/",version:")[^"]*(")|${1}'"$VER"'${2}|' "$DEST/../index.html"
echo "Published 8-ball-golf -> $DEST ($(find "$DEST" -type f | wc -l | tr -d ' ') files, $(du -sh "$DEST" | cut -f1))"
git -C "$DEST/.." status --short
