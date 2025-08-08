package com.espe.api_product.service;

import com.espe.api_product.model.Producto;
import java.util.List;
import java.util.Optional; // Necesario para el método obtenerPorId

/**
 * Interfaz de servicio para la gestión de productos.
 * Define las operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
 * que deben ser implementadas por la clase de servicio concreta.
 */
public interface ProductoService {

    /**
     * Recupera una lista de todos los productos disponibles.
     * 
     * @return Una {@link List} de objetos {@link Producto}. Puede ser una lista
     *         vacía si no hay productos.
     */
    List<Producto> listarTodos();

    /**
     * Recupera un producto específico por su identificador único.
     * 
     * @param id El ID del producto a buscar.
     * @return Un {@link Optional} que contiene el {@link Producto} si se encuentra,
     *         o un {@link Optional#empty()} si el producto no existe.
     */
    Optional<Producto> obtenerPorId(Long id);

    /**
     * Guarda un nuevo producto o actualiza uno existente.
     * Si el producto tiene un ID, intentará actualizarlo; de lo contrario, creará
     * uno nuevo.
     * 
     * @param producto El objeto {@link Producto} a guardar.
     * @return El {@link Producto} guardado/actualizado con su ID (si es nuevo) y
     *         otros datos.
     */
    Producto guardar(Producto producto);

    /**
     * Actualiza los detalles de un producto existente.
     * Este método es específico para la operación PUT, donde se espera un ID.
     * 
     * @param id               El ID del producto a actualizar.
     * @param productoDetalles Un objeto {@link Producto} con los nuevos datos para
     *                         la actualización.
     * @return El {@link Producto} actualizado si se encuentra, o {@code null} si el
     *         producto con el ID dado no existe.
     */
    Producto actualizar(Long id, Producto productoDetalles); // Nuevo método para la operación PUT

    /**
     * Elimina un producto de la base de datos por su identificador único.
     * 
     * @param id El ID del producto a eliminar.
     * @return {@code true} si el producto fue eliminado exitosamente, {@code false}
     *         si el producto no fue encontrado.
     */
    boolean eliminar(Long id); // Cambiado el tipo de retorno de void a boolean
}
