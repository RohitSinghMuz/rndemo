let CryptoJS = require('crypto-js');

export function Base64Encryption(input: { [key: string]: any }) {
  const inputString = JSON.stringify(input);
  const encrypted = CryptoJS.enc.Utf8.parse(inputString);
  return CryptoJS.enc.Base64.stringify(encrypted);
}

export function Base64Decryption(encrypted: string) {
  const decrypted = CryptoJS.enc.Base64.parse(encrypted);
  return CryptoJS.enc.Utf8.stringify(decrypted);
}

export function Base64StringConvert(encrypted: string) {
  const result = CryptoJS.enc.Utf8.parse(encrypted);
  return CryptoJS.enc.Base64.stringify(result);
}
