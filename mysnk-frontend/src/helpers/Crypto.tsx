import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_SECRET_KEY;

export default function encryptData(data: string) {
    const iv = CryptoJS.lib.WordArray.random(32);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(secretKey), {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });

    const ivBase64 = CryptoJS.enc.Base64.stringify(iv);
    const valueBase64 = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    const mac = CryptoJS.HmacSHA256(`${ivBase64}${valueBase64}`, secretKey).toString();

    const encryptedData = JSON.stringify({
        iv: ivBase64,
        value: valueBase64,
        mac: mac
    });

    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encryptedData));
    // return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}