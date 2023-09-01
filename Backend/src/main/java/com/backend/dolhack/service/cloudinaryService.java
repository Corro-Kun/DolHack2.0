package com.backend.dolhack.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class cloudinaryService {
    private final Cloudinary cloudinary;
    
    public cloudinaryService() {
        cloudinary = new Cloudinary("cloudinary://952327259573492:69KWI8DAaJA493J7n8O35I4YuPM@dy58wbxo1");
    }
    
    public String uploadImage(MultipartFile file) {
        try {
            Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());

            return (String) uploadResult.get("secure_url");
        } catch (IOException e) {
            return "ocurrio un error";
        }
    }
}
