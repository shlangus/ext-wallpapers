import path from 'node:path';
import fs from 'node:fs/promises';
import { APP_FOLDER } from './constants.js';
import { makeDirectory } from './make-directory.js';

await makeDirectory(APP_FOLDER);

const configPath = path.join(APP_FOLDER, 'config.json');
const config = await fs.readFile(configPath, 'utf8')
  .then(data => JSON.parse(data))
  .catch(() => ({}));

export async function getConfigKey(key) {
  return config[key];
}

export async function setConfigKey(key, value) {
  config[key] = value;
  await fs.writeFile(configPath, JSON.stringify(config));
}

