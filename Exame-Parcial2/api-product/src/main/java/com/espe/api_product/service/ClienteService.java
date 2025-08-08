package com.espe.api_product.service;

import com.espe.api_product.model.Cliente; // Importa la clase Cliente
import java.util.List;
import java.util.Optional;

/**
 * Interfaz de servicio para la gestión de clientes.
 * Define las operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
 * que deben ser implementadas por la clase de servicio concreta.
 */
public interface ClienteService {

    /**
     * Recupera una lista de todos los clientes disponibles.
     * 
     * @return Una {@link List} de objetos {@link Cliente}. Puede ser una lista
     *         vacía si no hay clientes.
     */
    List<Cliente> listarTodos();

    /**
     * Recupera un cliente específico por su identificador único.
     * 
     * @param id El ID del cliente a buscar.
     * @return Un {@link Optional} que contiene el {@link Cliente} si se encuentra,
     *         o un {@link Optional#empty()} si el cliente no existe.
     */
    Optional<Cliente> obtenerPorId(Long id);

    /**
     * Guarda un nuevo cliente o actualiza uno existente.
     * Si el cliente tiene un ID, intentará actualizarlo; de lo contrario, creará
     * uno nuevo.
     * 
     * @param cliente El objeto {@link Cliente} a guardar.
     * @return El {@link Cliente} guardado/actualizado con su ID (si es nuevo) y
     *         otros datos.
     */
    Cliente guardar(Cliente cliente);

    /**
     * Actualiza los detalles de un cliente existente.
     * Este método es específico para la operación PUT, donde se espera un ID.
     * 
     * @param id              El ID del cliente a actualizar.
     * @param clienteDetalles Un objeto {@link Cliente} con los nuevos datos para la
     *                        actualización.
     * @return El {@link Cliente} actualizado si se encuentra, o {@code null} si el
     *         cliente con el ID dado no existe.
     */
    Cliente actualizar(Long id, Cliente clienteDetalles);

    /**
     * Elimina un cliente de la base de datos por su identificador único.
     * 
     * @param id El ID del cliente a eliminar.
     * @return {@code true} si el cliente fue eliminado exitosamente, {@code false}
     *         si el cliente no fue encontrado.
     */
    boolean eliminar(Long id);
}
