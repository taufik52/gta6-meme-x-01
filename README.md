# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/taufik52/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/taufik52/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC for the top 50 posts. The meme is a tired gamer who waited 13 years since GTA V, called in sick for launch day, and is still watching the download spin — while make.fun's ghost sits on the couch next to him, paying him while he waits.

The picture (see `meme.png`) shows make.fun's ghost mascot from the official press kit, sitting in the scene with the gamer in front of a Vice City sunset, and the post's text carries make.fun, a tag of @makefunai, and the entrant's play code, telling readers that people and their AI agents earn real money on make.fun.

## The post is the entry

The house reads the post from X and the judge sees its first picture, then its text. The post is made from the public account @DongCape, with the meme attached, between the bounty's opening and its deadline. Its address goes in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## Run it

`main.ts` (Node 22) copies `POST.json` to the output directory. That is all it does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bvwh0bz2&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
