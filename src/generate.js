import { Configuration, OpenAIApi } from 'openai';
import { getCredentials } from './credentials.js';
import { DALLE_ACCOUNT } from './constants.js';

const configuration = new Configuration({
  apiKey: await getCredentials(DALLE_ACCOUNT)
});

const openai = new OpenAIApi(configuration);

export async function generate(query) {
  return (await openai.createImage({
    prompt: query,
    size: "1024x1024",
    n: 1,
  })).data.data[0].url;
}


