import { setWallpaper } from 'wallpaper';
import { Logger } from './logger.js';
import { generate } from './generate.js';
import { download } from './download.js';
import { getHoroscope } from './get-horoscope.js';
import { getConfigKey } from './config.js';
import { saveImage } from './save-image.js';

export async function run() {
  try {
    const query = await getHoroscope(await getConfigKey('sign'));
    const url = await generate(query);
    const file = await download(url);
    const filePath = await saveImage(file);
    await setWallpaper(filePath);
  } catch (error) {
    Logger.error(error?.message || error);
  }
}


