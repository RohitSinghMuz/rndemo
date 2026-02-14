import { NativeModules } from 'react-native';

const { CryptoModule } = NativeModules;
let CryptoJS = require('crypto-js');

export function SHA256(text: string) {
  let sha256Key = CryptoJS.SHA256(text);
  return sha256Key.toString(CryptoJS.enc.Hex);
}

export async function AESEncryption(text: string, password: string) {
  const encrypted = await CryptoModule.encryption(
    text,
    SHA256(password),
  );
  return encrypted;
}

export async function AESDecryption(encrypted: string, password: string) {
  const decrypted = await CryptoModule.decryption(
    encrypted,
    SHA256(password).toString(),
  );
  return decrypted;
}

export async function AESDecryptionWithoutSHA256(
  encrypted: string,
  password: string,
) {
  const decrypted = await CryptoModule.decryption(
    encrypted,
    password,
  );
  return decrypted;
}

// handle same for generating Hash Key
export function generatePassKey(
  memberId?: string,
  timestamp?: string,
  password?: string,
) {
  let passkey = memberId + '|' + timestamp + '|' + password;
  return SHA256(passkey);
}

export function generateAuthToken(
  key: string,
  apiSalt: string,
  appId: string,
) {
  let authToken = key + apiSalt + appId;
  return SHA256(authToken);
}
