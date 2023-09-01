package com.backend.dolhack.models.user;

public class ModelUsuario {
    // datos de la tabla usuario
    private String idusuario;
    private String nombre;
    private String apellido;
    private String contraseña;
    private String biografia;
    private String foto;
    private String banner;
    private int rol_idrol;

    // constructor basio
    public ModelUsuario() {
    }

    // constructor con parametros
    public ModelUsuario(String idusuario, String nombre, String apellido, String contraseña, String biografia, String foto, String banner, int rol_idrol) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contraseña = contraseña;
        this.biografia = biografia;
        this.foto = foto;
        this.banner = banner;
        this.rol_idrol = rol_idrol;
    }

    // metodo Getter de idusuario
    public String getIdusuario() {
        return this.idusuario;
    }

    // metodo Setter de idusuario
    public void setIdusuario(String idusuario) {
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
    public String getContraseña() {
        return this.contraseña;
    }

    // metodo Setter de contrasena
    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
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
