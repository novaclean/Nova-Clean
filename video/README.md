# Video playbook (Reels / ads)

What worked for the NovaClean Reel (`instagram-15s/`, 27 s, 1080×1920). Copy that folder as the template for the next video.

## Tools (installed by the environment setup script)
- `hyperframes` CLI + skills: HTML → MP4. Run CLI via `node /root/.claude/skills/hyperframes/scripts/plugin-cli.mjs <cmd>`.
- Kokoro (local, free voice): `hyperframes tts "text" -v am_puck -s 1.1 -o assets/voice/v1.wav`
  - Male EN voices: am_puck (upbeat, used), am_michael, am_adam, am_eric, am_liam, am_onyx, am_fenrir, am_echo, bm_george, bm_daniel, bm_lewis, bm_fable. PT-BR: pm_alex.
  - First run downloads the model (~340 MB).
- `heygen` CLI: needed only for the free music catalog.

## Each new session
1. HeyGen login (needed for music): `NODE_USE_ENV_PROXY=1 hyperframes auth login --device` → open the printed link, enter the code. Node needs `NODE_USE_ENV_PROXY=1` for every HeyGen call here.
2. HeyGen voices need the paid HyperFrames Pro plan; on Free use Kokoro.

## Steps
1. **Footage**: iPhone `.mov` files are often HDR (HLG). Convert to SDR or colours break and renders crawl:
   ```
   ffmpeg -i in.mov -an -vf "zscale=t=linear:npl=203,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p,scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30" -color_primaries bt709 -color_trc bt709 -colorspace bt709 -c:v libx264 -crf 20 out.mp4
   ```
2. **Scenes**: one file per scene in `compositions/`, mounted from `index.html`. Text inside the safe band (top ≥ 300 px, sides ≥ 120 px, nothing readable below 1330 px).
3. **Voice**: one wav per scene, placed with `data-start` + `data-duration` on `<audio>` in `index.html`.
4. **Music**: `NODE_USE_ENV_PROXY=1 hyperframes media-use resolve --type bgm --intent "upbeat corporate pop, instrumental" --project .` → copy to `assets/music/`, `data-volume="0.12"`, fade out 1.5 s.
5. **Check**: `hyperframes check --json`, then `hyperframes snapshot --at 1,5,10` and look at the frames.
6. **Render**: `hyperframes render -o out.mp4` (~2–3 min for 27 s; run in background).
7. **Loudness for social**: `ffmpeg -i out.mp4 -c:v copy -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:a aac -b:a 192k final.mp4`

## Media library (Google Drive, via the Google_Drive connector, logged in as amazonberry.au)
Each company keeps new media in **its own** Google account and shares the folder with amazonberry.au (editor), so files count on the company's storage, not Amazon Berry's.

| Company | New media folder (owner) | ID |
|---|---|---|
| NovaClean | NovaClean Midia (novaclean.au@gmail.com) | `1sdObaeI8KxqxHCSbk8RjxY2KQI33X4I9` |
| Espetus | Espetus Reels (espetus.au@gmail.com) | `1TGnn80rimePb2ILVG2sOSRBD_AUGma6i` |
| Amazon Berry | Amazon Berry → 00 - INBOX (own Drive) | `1DpPnCJCCL0fEpUlxdTemo6LlU5dxLYAT` |

- Only list the company's folder, newest first: `parentId = '<id>' and (mimeType contains 'image/' or mimeType contains 'video/')`, `orderBy: modifiedTime desc`, `excludeContentSnippets: true`. Download only what the video uses.
- Finished videos: put them back in the same company folder in a `Prontos` subfolder (create once if missing). Files uploaded from here are owned by amazonberry.au (small MP4s, fine).
- Zen Academy material (~1.1 GB, folders FOTOS ZEN / Zen Academy / VIDEOS ZEN) still sits on amazonberry.au storage: owner decides later where it goes.

## Publish
- Host the MP4 at a public URL (for NovaClean: commit to `main` of the site repo → `https://novaclean.au/<file>.mp4`).
- Instagram via Windsor.ai `instagram` → `create_video_post` (accounts: novaclean.au `17841478003315900`, espetus.au `17841408266907857`, amazonberry.au `17841445277572844`).
- The call can time out while Instagram processes the video: check the account's media before retrying, or it posts twice.
