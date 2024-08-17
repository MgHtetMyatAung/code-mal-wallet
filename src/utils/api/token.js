// src/utils/tokenUtils.js
import { decryptData } from "./crypto";

// Store token in localStorage
// export const setToken = (token) => {
//   const encryptedToken = token ? encryptData(token) : null;
//   localStorage.setItem("access_token", encryptedToken);
// };

// Retrieve token from localStorage
export const getToken = () => {
  const auth = JSON.parse(localStorage.getItem("persist:root"));
  const encryptedToken = JSON.parse(auth?.auth_store)?.token;
  return encryptedToken ? decryptData(encryptedToken) : null;
};
