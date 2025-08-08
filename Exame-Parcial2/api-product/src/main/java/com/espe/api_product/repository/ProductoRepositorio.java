package com.espe.api_product.repository;

import com.espe.api_product.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long> {
    // Aquí puedes agregar métodos personalizados si los necesitas más adelante.
}
