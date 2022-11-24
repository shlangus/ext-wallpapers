import https from 'node:https';

export function download(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, response => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        return reject(new Error(`Status Code: ${ response.statusCode }`));
      }

      const data = [];

      response.on('data', chunk => {
        data.push(chunk);
      });

      response.on('end', () => resolve(Buffer.concat(data)));
    });

    request.on('error', reject);
  });
}


