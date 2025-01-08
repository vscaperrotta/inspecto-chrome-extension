import { execSync } from 'node:child_process'
import paths from '../config/paths.js';

// Write manifest file
function writeManifest() {
  execSync(`node ${paths.appScripts}/manifest.js`, { stdio: 'inherit' })
}

writeManifest()