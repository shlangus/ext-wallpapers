#! /usr/bin/env node
import fs from 'node:fs/promises';
import prompts from 'prompts';
import { setConfigKey } from './config.js';
import { deleteCredentials, setCredentials } from './credentials.js';
import { APP_FOLDER, DALLE_ACCOUNT } from './constants.js';
import { run } from './main.js';

const args = process.argv.slice(2);

const commands = {
  run: {
    handler: run
  },
  config: {
    handler: configure
  },
  clean: {
    handler: clean
  }
};

const command = commands[args[0]];

if (!command) {
  console.log('Unrecognized command');
  process.exit(1);
}
await command.handler();

async function configure() {
  const { key } = await prompts({
    type: 'text',
    name: 'key',
    message: 'Please paste your API key for Dall-e (you need to register at https://openai.com/dall-e-2/)',
  });
  // TODO: it would be nice to check a key by making some request
  await setCredentials(DALLE_ACCOUNT, key);

  const { sign } = await prompts({
    type: 'select',
    name: 'sign',
    message: 'Choose your zodiac sign',
    choices: [
      { title: '♈ Aries (Ram): March 21–April 19', value: 'aries' },
      { title: '♉ Taurus (Bull): April 20–May 20', value: 'taurus' },
      { title: '♊ Gemini (Twins): May 21–June 21', value: 'gemini' },
      { title: '♋ Cancer (Crab): June 22–July 22', value: 'cancer' },
      { title: '♌ Leo (Lion): July 23–August 22', value: 'leo' },
      { title: '♍ Virgo (Virgin): August 23–September 22', value: 'virgo' },
      { title: '♎ Libra (Balance): September 23–October 23', value: 'libra' },
      { title: '♏ Scorpius (Scorpion): October 24–November 21', value: 'scorpio' },
      { title: '♐ Sagittarius (Archer): November 22–December 21', value: 'sagittarius' },
      { title: '♑ Capricornus (Goat): December 22–January 19', value: 'capricorn' },
      { title: '♒ Aquarius (Water Bearer): January 20–February 18', value: 'aquarius' },
      { title: '♓ Pisces (Fish): February 19–March 20', value: 'pisces' },
    ]
  });
  await setConfigKey('sign', sign);
}

async function clean() {
  await deleteCredentials(DALLE_ACCOUNT);
  await fs.rm(APP_FOLDER, { recursive: true, force: true });
}



