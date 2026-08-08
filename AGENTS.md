# AGENTS.md

## Project Overview

This repository contains a small Windows utility written in **AutoHotkey v2**.
Its purpose is to **toggle borderless window** mode through a keyboard shortcut.

## Build Pipeline

1. Icon assets are generated & optimized by the consumer hook
2. AutoHotkey v2 source is compiled into an EXE
3. The executable is compressed and packaged by `@alysoid/ahk-build`
4. A deterministic archive is produced in `dist/`

## Setup commands

- Install deps: `pnpm install`
- Install build tools: `pnpm run setup`
- Compile AHK to EXE & Build ZIP archive: `pnpm run build`
