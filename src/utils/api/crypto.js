// src/utils/crypto.js
import CryptoJS from "crypto-js";

// Replace with your own secret key
const SECRET_KEY = "prMRwIS4SQatzik+POw9vIgga2qImZgrD+GFsCcmVpzw";

// Encrypt data
export const encryptData = (data) => {
  return data ? CryptoJS.AES.encrypt(data, SECRET_KEY).toString() : null;
};

// Decrypt data
export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
