import https from 'node:https';

export function getHoroscope(sign) {
  return new Promise((resolve, reject) => {
    const request = https.request({
        method: 'POST',
        hostname: 'aztro.sameerkumar.website',
        path: `/?sign=${ sign }&day=today`,
        headers: {
          'Content-Type': 'application/json',
        }
      },
      response => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          return reject(new Error(`Status Code: ${ response.statusCode }`));
        }

        const data = [];

        response.on('data', chunk => {
          data.push(chunk);
        });

        response.on('end', () => resolve(JSON.parse(Buffer.concat(data).toString()).description));
      });

    request.on('error', reject);

    request.end();
  });
}