import { defineConfig } from "@alysoid/ahk-build";

export default defineConfig({
  entry: "BorderlessToggle.ahk",
  app: {
    name: "Borderless Toggle",
    executable: "BorderlessToggle.exe",
    artifactName: "BorderlessToggle",
    description: "Toggle borderless mode for any window",
    copyright: "Copyright (c) 2026, Andrea Brandi",
    language: "0x0409",
    icon: "icons/BorderlessToggle-App.ico",
    resources: [
      { source: "icons/BorderlessToggle-Active-Light.ico", id: 201 },
      { source: "icons/BorderlessToggle-Inactive-Light.ico", id: 202 },
      { source: "icons/BorderlessToggle-Suspended-Light.ico", id: 203 },
      { source: "icons/BorderlessToggle-Active-Dark.ico", id: 211 },
      { source: "icons/BorderlessToggle-Inactive-Dark.ico", id: 212 },
      { source: "icons/BorderlessToggle-Suspended-Dark.ico", id: 213 },
    ],
  },
  compile: {
    architecture: "x64",
    compression: "upx",
    // Match Ahk2Exe's legacy /compress 2 invocation.
    upxArgs: ["-q", "--all-methods", "--compress-icons=0"],
  },
  portable: {
    files: [{ from: "${buildDir}/BorderlessToggle.exe", to: "BorderlessToggle.exe" }, "LICENSE"],
  },
  release: {
    repository: "starise/borderless-toggle",
    tag: "${packageVersion}",
    title: "Release v${packageVersion}",
    notes: "Release version ${packageVersion}",
  },
  hooks: {
    beforeCompile: [{ command: "pnpm", args: ["run", "icons"] }],
  },
});
