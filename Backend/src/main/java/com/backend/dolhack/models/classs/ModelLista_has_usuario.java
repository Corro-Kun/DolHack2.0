package com.backend.dolhack.models.classs;

public class ModelLista_has_usuario {
    private String lista_idlista;
    private String usuario_idusuario;

    public ModelLista_has_usuario() {
    }

    public ModelLista_has_usuario(String lista_idlista, String usuario_idusuario) {
        this.lista_idlista = lista_idlista;
        this.usuario_idusuario = usuario_idusuario;
    }

    public String getLista_idlista() {
        return lista_idlista;
    }

    public void setLista_idlista(String lista_idlista) {
        this.lista_idlista = lista_idlista;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }
    
}
