# <img src="images/BorderlessToggle-App.png" width="24"> Borderless Toggle

Turn the active Windows window into borderless fullscreen with a keyboard shortcut. Press the shortcut again to restore the original window.

## Install

### Scoop

```powershell
scoop bucket add confetti https://github.com/starise/Scoop-Confetti
scoop install borderless-toggle
```

### Manual

Download the latest `BorderlessToggle-*.zip` from [Releases](https://github.com/starise/borderless-toggle/releases), extract it, and run `BorderlessToggle.exe`. No installer is required.

## Use

1. Focus the window you want to change.
2. Press `Ctrl` + `Shift` + `F11` (the default shortcut).
3. Press it again to restore the window.

Click the tray icon to suspend or resume the shortcut. Right-click to:

- Change the shortcut in **Options**.
- **Suspend/Resume** the shortcut.
- **Restore all** managed windows.
- Exit the app (restores managed windows).

Leave the shortcut empty in **Options** to disable it.

Settings are saved in `settings.ini` next to the executable when possible, otherwise they are saved in `%APPDATA%\BorderlessToggle\settings.ini`.

## Build from source

Requirements: Windows, Node.js 24, and pnpm 10 or newer.

```powershell
pnpm install
pnpm run setup
pnpm run build
```

The archive is created in `dist/`.
