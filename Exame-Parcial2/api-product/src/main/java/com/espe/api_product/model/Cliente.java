package com.espe.api_product.model;

import jakarta.persistence.*; // Importa las anotaciones de JPA
import java.io.Serializable; // Es una buena práctica para entidades JPA

/**
 * Clase de modelo que representa un Cliente.
 * Mapea a la tabla 'clientes' en la base de datos.
 */
@Entity // Indica que esta clase es una entidad JPA y se mapeará a una tabla de base de
        // datos
@Table(name = "clientes") // Especifica el nombre de la tabla en la base de datos
public class Cliente implements Serializable {

    // Atributos del Cliente
    @Id // Marca el campo 'id' como la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Configura la generación automática del ID
    private Long id;

    @Column(nullable = false, unique = true) // 'ci' no puede ser nulo y debe ser único
    private String ci; // Cédula de Identidad

    @Column(nullable = false) // 'nombres' no puede ser nulo
    private String nombres;

    @Column(nullable = false) // 'apellidos' no puede ser nulo
    private String apellidos;

    @Column // 'contacto' puede ser nulo
    private String contacto; // Información de contacto (ej. teléfono, email)

    // Constructores

    /**
     * Constructor por defecto requerido por JPA.
     */
    public Cliente() {
    }

    /**
     * Constructor para crear un nuevo Cliente con todos los atributos.
     * 
     * @param ci        Cédula de Identidad del cliente.
     * @param nombres   Nombres del cliente.
     * @param apellidos Apellidos del cliente.
     * @param contacto  Información de contacto del cliente.
     */
    public Cliente(String ci, String nombres, String apellidos, String contacto) {
        this.ci = ci;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.contacto = contacto;
    }

    // Getters y Setters para todos los atributos

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCi() {
        return ci;
    }

    public void setCi(String ci) {
        this.ci = ci;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "id=" + id +
                ", ci='" + ci + '\'' +
                ", nombres='" + nombres + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", contacto='" + contacto + '\'' +
                '}';
    }
}
