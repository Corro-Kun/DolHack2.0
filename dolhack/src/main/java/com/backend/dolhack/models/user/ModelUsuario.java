package com.backend.dolhack.models.user;

public class ModelUsuario {
    // datos de la tabla usuario
    private int idusuario;
    private String nombre;
    private String apellido;
    private String contrasena;
    private String biografia;
    private String foto;
    private String banner;
    private int rol_idrol;

    // constructor basio
    public ModelUsuario() {
    }

    // constructor con parametros
    public ModelUsuario(int idusuario, String nombre, String apellido, String contrasena, String biografia, String foto, String banner, int rol_idrol) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;
        this.biografia = biografia;
        this.foto = foto;
        this.banner = banner;
        this.rol_idrol = rol_idrol;
    }

    // metodo Getter de idusuario
    public int getIdusuario() {
        return this.idusuario;
    }

    // metodo Setter de idusuario
    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    // metodo Getter de nombre
    public String getNombre() {
        return this.nombre;
    }

    // metodo Setter de nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // metodo Getter de apellido
    public String getApellido() {
        return this.apellido;
    }

    // metodo Setter de apellido
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    // metodo Getter de contrasena
    public String getContrasena() {
        return this.contrasena;
    }

    // metodo Setter de contrasena
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    // metodo Getter de biografia
    public String getBiografia() {
        return this.biografia;
    }

    // metodo Setter de biografia
    public void setBiografia(String biografia) {
        this.biografia = biografia;
    }

    // metodo Getter de foto
    public String getFoto() {
        return this.foto;
    }

    // metodo Setter de foto
    public void setFoto(String foto) {
        this.foto = foto;
    }

    // metodo Getter de banner
    public String getBanner() {
        return this.banner;
    }

    // metodo Setter de banner
    public void setBanner(String banner) {
        this.banner = banner;
    }

    // metodo Getter de rol_idrol
    public int getRol_idrol() {
        return this.rol_idrol;
    }

    // metodo Setter de rol_idrol
    public void setRol_idrol(int rol_idrol) {
        this.rol_idrol = rol_idrol;
    }
}
