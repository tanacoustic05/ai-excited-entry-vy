// ai-excited-01 entry (Node 22, stdlib only): writes the entry image to /output/entry.png.
// Image: "Stained-glass whale breaching a golden cloud sea" — 1024x1024 JPEG bytes named
// entry.png, ~659 KB < 1 MiB, drawn with RealVisXL V4.0 (SDXL), 30 steps.
// The judge sees exactly the bytes this program copies.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
console.log('entry.png written to', join(outDir, 'entry.png'));
