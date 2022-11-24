function log(message) {
  console.log(message);
}

function error(message) {
  console.error(message);
}

export const Logger = {
  log,
  error
}