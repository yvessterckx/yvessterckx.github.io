# yvessterckx.github.io

Games portal served at https://yvessterckx.github.io/: small browser games made with AI (Claude). Static files only, no build step here.

- `index.html`: the portal page. To add a game, append one object to the `GAMES` array in it.
- `assets/`: tile cover images.
- `curtain-climber/`: built copy of Curtain Climber (the Vite dist/ output).
- `hollowed/`: built copy of Hollowed (Vite `dist/`, relative base).
- `tools/`: publish scripts. They copy files into this repo and print `git status`; they never commit or push.

The game source repos are private, so this repo holds a copy of each game.

## Update a game

```bash
tools/publish-curtain-climber.sh [path/to/curtain-climber]   # default ~/Sites/curtain-climber
tools/publish-hollowed.sh [path/to/hollowed]                 # default ~/Sites/hollowed; runs npm ci + npm run build
git add -A && git commit -m "Update game" && git push
```
