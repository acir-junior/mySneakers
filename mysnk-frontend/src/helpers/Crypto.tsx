import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_SECRET_KEY;

export default function encryptData(data: string) {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}