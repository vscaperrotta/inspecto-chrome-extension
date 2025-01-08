import fs from 'fs';
import Pkg from '../../package.json';

function _getManifest() {

  const manifest = {
    manifest_version: 3,
    name: Pkg.displayName || Pkg.name,
    version: Pkg.version,
    description: Pkg.description,
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
      "bookmarks",
      "tabs",
      "storage",
      "scripting"
    ],
    host_permissions: [
      "<all_urls>"
    ],
    background: {
      service_worker: "background.js"
    },
    content_scripts: [
      {
        matches: [
          "<all_urls>"
        ],
        match_origin_as_fallback: true,
        js: [
          "content.js"
        ]
      }
    ]
  }

  return manifest
}

export function writeManifest() {
  const manifest = _getManifest();
  const manifestString = JSON.stringify(manifest, null, 2);
  fs.writeFileSync('../../public/manifest.json', manifestString, 'utf8');
}