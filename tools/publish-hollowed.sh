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
echo "Published hollowed -> $DEST ($(find "$DEST" -type f | wc -l | tr -d ' ') files, $(du -sh "$DEST" | cut -f1))"
git -C "$DEST/.." status --short
