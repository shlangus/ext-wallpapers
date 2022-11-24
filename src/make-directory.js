import fs, { constants } from 'node:fs/promises';

export async function makeDirectory(path) {
  try {
    // existsSync return true if there is no permission
    await fs.access(path, constants.R_OK | constants.W_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(path, { recursive: true });
    }
  }
}
