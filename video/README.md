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

## Media library (Google Drive, via the Google_Drive connector)
Same folders per company. Workflow: owner drops new media in **00 - INBOX** → use it → move used originals to FOTOS / VIDEOS → finished videos to CRIATIVOS. Only list INBOX (newest first) when starting a video; don't load whole folders.

| Folder | Nova Clean | Espetus | Amazon Berry |
|---|---|---|---|
| 00 - INBOX | `121h1sjQELlXaGjPLo8rX6SwqbuQ1m2Gz` | `1cYNGS_H9UmyaQqaejfdQGNBGnpF0SSZ0` | `1DpPnCJCCL0fEpUlxdTemo6LlU5dxLYAT` |
| FOTOS | `1n1eegxyrwbOcJTJgZPd5EdHF0XMYXzvK` | `1Xh6cgei6IW5mVYvebjXdVyH96dJjHd0W` | `10OCXub1BxAqNnRngIjq5AuBMytCyrF-F` |
| VIDEOS | `1NIpcRq5Av0XbBWU6EAraO4ONHNCTZkc_` | `1Eb6cww7IcQ0WDFXtJ5_U7LRgF_LrUYai` | `1oOTAoaSMevRQE5NOiThnd_KNDMn9rvDA` |
| CRIATIVOS (finished) | `1QF1otayLJE8Mw53gSz_vyMEZmGNZXntL` | `1lgqkMIW3ITGDPGI5ZpO2kkp5zW9Lf4Ro` | `13VDlKMlDDozOOCS_unJDNzLfJL9q5K0H` |
| DNA DA MARCA | `17Wao947Mr7w31mttDW4NBp_0ucjJoYm5` | `1E4h3GHhrIp19ISGDd814YA9UfeEy3IrS` | `1skW8hFE1RqhmS9yQhxSDEdeWXMHfe6Je` |

Query: `parentId = '<INBOX id>' and (mimeType contains 'image/' or mimeType contains 'video/')`, `orderBy: modifiedTime desc`, `excludeContentSnippets: true`.

## Publish
- Host the MP4 at a public URL (for NovaClean: commit to `main` of the site repo → `https://novaclean.au/<file>.mp4`).
- Instagram via Windsor.ai `instagram` → `create_video_post` (accounts: novaclean.au `17841478003315900`, espetus.au `17841408266907857`, amazonberry.au `17841445277572844`).
- The call can time out while Instagram processes the video: check the account's media before retrying, or it posts twice.
