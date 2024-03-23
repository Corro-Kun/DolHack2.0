package com.backend.dolhack.lib;
import com.resend.*;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.SendEmailRequest;
import com.resend.services.emails.model.SendEmailResponse;

public class Email {
    Resend resend = new Resend("re_C4JDJ2iq_6DEj1LFczy8pANPtEiBHBZTw");

    public boolean NewUserEmail(String email,String name, int rol){
        SendEmailRequest sendEmailRequest;
        if(rol == 1){
            sendEmailRequest = SendEmailRequest.builder()
                //.from("onboarding@resend.dev")
                .from("networpava@gmail.com")
                .to(email)
                .subject("Registro exitoso")
                .html("<h1>Registro exitoso</h1><p>¡Bienvenido a DolHack <strong>Sr."+name+"</strong>!</p><p>Estamos emocionados de darte la bienvenida a nuestra plataforma educativa diseñada exclusivamente para profesores comprometidos como tú.</p><p>En este espacio, encontrarás herramientas y recursos poderosos que te ayudarán a potenciar tu enseñanza y a llevar la experiencia educativa al siguiente nivel.</p><p>En DolHack, creemos que la educación es la clave para el éxito, y estamos aquí para ayudarlo a alcanzar sus objetivos.</p><p>Si tiene alguna pregunta, no dude en ponerse en contacto con nosotros.</p><p>¡Gracias por registrarte!</p><p>Atentamente,<br> <strong>Equipo de desarrollo DolHack</strong></p>")
                .build();
        }else{
            sendEmailRequest = SendEmailRequest.builder()
                //.from("onboarding@resend.dev")
                .from("networpava@gmail.com")
                .to(email)
                .subject("Registro exitoso")
                .html("<h1>Registro exitoso</h1><p>¡Bienvenido a DolHack <strong>Sr."+name+"</strong>!</p><p>Estamos encantados de darte la bienvenida a nuestra plataforma educativa diseñada exclusivamente para estudiantes como tú.</p><p>En este espacio, encontrarás una amplia gama de herramientas y recursos que te ayudarán a potenciar tu aprendizaje y a expandir tus horizontes académicos.</p><p>En DolHack, creemos firmemente que la educación es la clave para alcanzar tus metas, y estamos aquí para apoyarte en cada paso de tu viaje educativo.</p><p>Si tienes alguna pregunta o necesitas orientación, no dudes en contactarnos. Estamos aquí para ayudarte a sacar el máximo provecho de nuestra plataforma.</p><p>¡Gracias por registrarte!</p><p>Atentamente,<br> <strong>Equipo de desarrollo DolHack</strong></p>")
                .build();
        }

        try {
            SendEmailResponse data = resend.emails().send(sendEmailRequest);
            System.out.println(data.getId());
        } catch (ResendException e) {
            e.printStackTrace();
        }
        return true;
    }
}
