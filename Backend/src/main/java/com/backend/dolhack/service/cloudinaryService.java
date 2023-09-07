package com.backend.dolhack.service;

import com.cloudinary.Cloudinary;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class cloudinaryService {
    private final Cloudinary cloudinary;
    
    public cloudinaryService() {
        cloudinary = new Cloudinary("cloudinary://952327259573492:69KWI8DAaJA493J7n8O35I4YuPM@dy58wbxo1");
    }
    
    public String uploadImage(MultipartFile file, String folder) {
        try {
            // Kevin esto es para que se guarde en una carpeta especifica quitalo si no lo necesitas
            Map<String, Object> uploadParams = new HashMap<>();
            uploadParams.put("folder", "DolHack2.0/"+folder);
            
            Map uploadResult = cloudinary.uploader().upload(file.getBytes(), /*ObjectUtils.emptyMap()*/ uploadParams);

            return (String) uploadResult.get("secure_url");
        } catch (IOException e) {
            return "ocurrio un error";
        }
    }
    public boolean  deleteImage(String imageUrl) throws IOException {
        try {
            URL url = new URL("https://api.cloudinary.com/v1_1/your_cloud_name/image/delete_by_url");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("DELETE");
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Basic your_api_key:your_api_secret");

            // Cuerpo de la solicitud JSON
            String requestBody = "{\"public_id\":\"" + imageUrl + "\"}";

            // Enviar la solicitud
            conn.getOutputStream().write(requestBody.getBytes());

            int responseCode = conn.getResponseCode();
            if (responseCode == 200) {
                return true;
            }
            conn.disconnect();
            return false;
        } catch (IOException e) {
            return false;
        }
    }
}