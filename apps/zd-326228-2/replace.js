import { cwd } from 'node:process'
import { join } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'

const prerenderManifestJsonPath = join(cwd(), '.next', 'standalone', '.next', 'prerender-manifest.json')
const prerenderManifestJsonObject = JSON.parse(readFileSync(prerenderManifestJsonPath, 'utf-8'))

prerenderManifestJsonObject.preview.previewModeId = '12345678901234567890'

writeFileSync(prerenderManifestJsonPath, JSON.stringify(prerenderManifestJsonObject), 'utf-8')

console.log(JSON.parse(readFileSync(prerenderManifestJsonPath, 'utf-8')))