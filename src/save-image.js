import fs from 'node:fs/promises';
import path from 'node:path';
import { APP_FOLDER } from './constants.js';
import { makeDirectory } from './make-directory.js';

export async function saveImage(fileAsBuffer) {
  const dirname = path.join(APP_FOLDER, 'images');
  await makeDirectory(dirname);

  const fullPath = path.join(dirname, `${ Date.now() }.jpg`);
  await fs.writeFile(fullPath, fileAsBuffer);

  return fullPath;
}