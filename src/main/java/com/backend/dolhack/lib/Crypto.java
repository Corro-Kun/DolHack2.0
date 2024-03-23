package com.backend.dolhack.lib;

import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

public class Crypto {

    private final String key = "kevinDolHack2024";

    public String Encrypt(String value)throws Exception{
        byte[] encryptedBytes = settingEncrypt(value, key);
        String encryptedText = Base64.getEncoder().encodeToString(encryptedBytes);
        return encryptedText;
    }

    public String Decrypt(String value)throws Exception{
        byte[] encryptedBytes = Base64.getDecoder().decode(value);
        String decryptedText = settingDecrypt(encryptedBytes);
        return decryptedText;
    }

    public boolean Compare(String value, String hash)throws Exception{
        String encryptedText = Encrypt(value);
        return encryptedText.equals(hash);
    }

    public static byte[] settingEncrypt(String plainText, String key) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(), "AES");
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        return cipher.doFinal(plainText.getBytes());
    }

    public String settingDecrypt(byte[] encryptedBytes) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(), "AES");
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        return new String(decryptedBytes);
    }

}
