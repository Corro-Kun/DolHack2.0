package com.backend.dolhack.models.home;

public class ListPeople {
    private String usuario_idusuario;
    private String nombre;
    private String apellido;
    private String foto;

    private String banner;

    private String titulo;

    private int rol_idrol;

    public ListPeople(String usuario_idusuario, String nombre, String apellido, String foto, String banner, String titulo, int rol_idrol) {
        this.usuario_idusuario = usuario_idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
        this.banner = banner;
        this.titulo = titulo;
        this.rol_idrol = rol_idrol;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getRol_idrol() {
        return rol_idrol;
    }

    public void setRol_idrol(int rol_idrol) {
        this.rol_idrol = rol_idrol;
    }
}
