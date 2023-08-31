package com.backend.dolhack.lib;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Hash {
    public String generateHash(String key){
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");

            byte[] hashBytes = md.digest(key.getBytes());

            StringBuilder hashHex = new StringBuilder();
            for (byte b : hashBytes) {
                hashHex.append(String.format("%02x", b));
            }

            return hashHex.toString();
        } catch (NoSuchAlgorithmException e) {
            return null;
        }
    } 
    public boolean compareHash(String key, String hash){
        return generateHash(key).equals(hash);
    }
}
