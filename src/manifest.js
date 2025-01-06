import fs from 'fs-extra'
import Pkg from '../package.json'

export async function getManifest() {
  const pkg = await fs.readJson(Pkg)

  const manifest = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    action: {
      default_popup: "index.html",
      default_icon: "icon.png"
    },
    icons: {
      16: "icon.png",
      48: "icon.png",
      128: "icon.png"
    },
    permissions: [
      "activeTab",
      "scripting"
    ]
  }

  return manifest
}