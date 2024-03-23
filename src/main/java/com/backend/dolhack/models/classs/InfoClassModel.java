package com.backend.dolhack.models.classs;

public class InfoClassModel {
    private String idclase;
    private String titulo;
    private String descripcion;
    private String fecha_inicio;
    private String fecha_finalizacion;
    private String nombretipo;
    private String nombrenivel;
    private String imagen;
    private String foto;
    private String nombre;
    private String apellido;
    private String correo;

    private String telefono;

    public InfoClassModel(){

    }

    public InfoClassModel(String idclase, String titulo, String descripcion, String fecha_inicio, String fecha_finalizacion, String nombretipo, String nombrenivel, String imagen, String foto, String nombre, String apellido, String correo, String telefono) {
        this.idclase = idclase;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.nombretipo = nombretipo;
        this.nombrenivel = nombrenivel;
        this.imagen = imagen;
        this.foto = foto;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
    }

    public String getIdclase() {
        return idclase;
    }

    public void setIdclase(String idclase) {
        this.idclase = idclase;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) { 
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) { 
        this.descripcion = descripcion;
    }

    public String getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) { 
        this.fecha_inicio = fecha_inicio;
    }

    public String getFecha_finalizacion() {
        return fecha_finalizacion;
    }

    public void setFecha_finalizacion(String fecha_finalizacion) { 
        this.fecha_finalizacion = fecha_finalizacion;
    }

    public String getNombretipo() {
        return nombretipo;
    }

    public void setNombretipo(String nombretipo) { 
        this.nombretipo = nombretipo;
    }

    public String getNombrenivel() {
        return nombrenivel;
    }

    public void setNombrenivel(String nombrenivel) { 
        this.nombrenivel = nombrenivel;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) { 
        this.imagen = imagen;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) { 
        this.foto = foto;
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

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) { 
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
