package com.espe.api_product.repository;

import com.espe.api_product.model.Cliente; // Importa la clase Cliente
import org.springframework.data.jpa.repository.JpaRepository; // Importa JpaRepository
import org.springframework.stereotype.Repository; // Importa Repository

/**
 * Interfaz de repositorio para la entidad Cliente.
 * Extiende JpaRepository para obtener operaciones CRUD básicas automáticamente.
 * El primer parámetro es la entidad (Cliente) y el segundo es el tipo de la
 * clave primaria (Long).
 */
@Repository // Indica que esta interfaz es un componente de repositorio de Spring
public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {
    // Spring Data JPA generará automáticamente las implementaciones para:
    // findAll(), findById(id), save(cliente), deleteById(id), existsById(id), etc.

    // Puedes añadir métodos personalizados aquí si necesitas consultas específicas,
    // por ejemplo: Optional<Cliente> findByCi(String ci);
}
