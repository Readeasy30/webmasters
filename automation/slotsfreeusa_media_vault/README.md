# SlotsFreeUSA Media Vault

Use this folder structure on your Windows computer for organizing raw video, voiceover, and production-ready media files.

## Folder Structure

```txt
/slotsfreeusa_media_vault/
├── 01_raw_renders/          <-- Put temporary unedited renders here
├── 02_voiceovers/           <-- Voiceover download folder
├── 03_production_ready/     <-- Run the batch script here before posting
└── rename_assets.bat        <-- Executable asset manager
```

## How To Use

1. Put raw video exports in `01_raw_renders/`.
2. Put MP3 voiceovers in `02_voiceovers/`.
3. Move finished MP4 and MP3 files into `03_production_ready/`.
4. Copy `rename_assets.bat` into `03_production_ready/`.
5. Double-click `rename_assets.bat` before posting.
6. Upload the renamed files to the correct publishing platform.

## Naming Output

The batch script renames files like this:

```txt
slotsfreeusa_video_ID1_2026-05-27.mp4
slotsfreeusa_audio_ID1_2026-05-27.mp3
```

If a file name already exists, the script adds a duplicate suffix instead of overwriting.

## Asset Rule

Only production-ready files should go into `03_production_ready/`.

Keep drafts and unfinished files out of the final posting folder.
