# yvessterckx.github.io

Games portal served at https://yvessterckx.github.io/: small browser games made with AI (Claude). Static files only, no build step here.

- `index.html`: the portal page. To add a game, append one object to the `GAMES` array in it.
- `assets/`: tile cover images.
- `pawcour/`: built copy of Pawcour (the Vite dist/ output; the game was called Curtain Climber before).
- `curtain-climber/`: only a redirect page to `pawcour/` (the old address).
- `hollowed/`: built copy of Hollowed (Vite `dist/`, relative base).
- `8-ball-golf/`: built copy of 8 Ball Golf (Vite `dist/`, relative base).
- `tools/`: publish scripts. They copy files into this repo and print `git status`; they never commit or push.

The game source repos are private, so this repo holds a copy of each game.

## Update a game

```bash
tools/publish-pawcour.sh [path/to/pawcour]                   # default ~/Sites/curtain-climber (the local folder keeps its old name); runs npm run build
tools/publish-hollowed.sh [path/to/hollowed]                 # default ~/Sites/hollowed; runs npm ci + npm run build
tools/publish-8-ball-golf.sh [path/to/8-ball-golf]           # default ~/Sites/8-ball-golf; runs npm ci + npm run build
git add -A && git commit -m "Update game" && git push
```
