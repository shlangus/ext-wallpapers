import keytar from 'keytar';

const SERVICE_NAME = 'ext-wallpapers';

export async function getCredentials(account) {
  return await keytar.getPassword(SERVICE_NAME, account);
}

export async function setCredentials(account, value) {
  await keytar.setPassword(SERVICE_NAME, account, value);
}

export async function deleteCredentials(account) {
  await keytar.deletePassword(SERVICE_NAME, account);
}