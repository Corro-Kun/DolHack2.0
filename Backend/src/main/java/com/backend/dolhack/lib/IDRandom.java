package com.backend.dolhack.lib;

import java.security.SecureRandom;
import java.util.Random;

public class IDRandom{
    private final Random random = new SecureRandom();
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int ID_LENGTH = 30;

    public String generateID() {
        StringBuilder idBuilder = new StringBuilder(ID_LENGTH);
        for (int i = 0; i < ID_LENGTH; i++) {
            int randomIndex = random.nextInt(CHARACTERS.length());
            char randomChar = CHARACTERS.charAt(randomIndex);
            idBuilder.append(randomChar);
        }
        return idBuilder.toString();
    }

}
