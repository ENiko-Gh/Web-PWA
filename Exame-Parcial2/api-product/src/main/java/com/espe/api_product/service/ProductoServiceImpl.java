package com.espe.api_product.service;

import com.espe.api_product.model.Producto;
import com.espe.api_product.repository.ProductoRepositorio; // Asegúrate de que este sea el nombre correcto de tu interfaz de repositorio
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementación concreta de la interfaz ProductoService.
 * Proporciona la lógica de negocio para las operaciones CRUD de productos,
 * interactuando con ProductoRepositorio para la persistencia de datos.
 */
@Service // Marca esta clase como un componente de servicio de Spring
public class ProductoServiceImpl implements ProductoService {

    @Autowired // Inyecta una instancia de ProductoRepositorio
    private ProductoRepositorio productoRepositorio;

    /**
     * @inheritDoc
     */
    @Override
    public List<Producto> listarTodos() {
        // Usa el método findAll() del repositorio para obtener todos los productos
        return productoRepositorio.findAll();
    }

    /**
     * @inheritDoc
     */
    @Override
    public Optional<Producto> obtenerPorId(Long id) {
        // Usa el método findById(id) del repositorio para buscar un producto por su ID.
        // Retorna un Optional para manejar la posible ausencia del producto.
        return productoRepositorio.findById(id);
    }

    /**
     * @inheritDoc
     */
    @Override
    public Producto guardar(Producto producto) {
        // Usa el método save(producto) del repositorio para guardar un nuevo producto
        // o actualizar uno existente (si el ID ya existe).
        return productoRepositorio.save(producto);
    }

    /**
     * @inheritDoc
     *             Implementación del método actualizar para la operación PUT.
     *             Busca el producto por ID, actualiza sus campos y lo guarda.
     * @param id               El ID del producto a actualizar.
     * @param productoDetalles El objeto Producto con los nuevos detalles.
     * @return El producto actualizado si se encuentra, o null si el producto con el
     *         ID dado no existe.
     */
    @Override
    public Producto actualizar(Long id, Producto productoDetalles) {
        // Primero, intenta encontrar el producto existente por su ID
        Optional<Producto> productoExistente = productoRepositorio.findById(id);

        // Si el producto existe, procede a actualizarlo
        if (productoExistente.isPresent()) {
            Producto producto = productoExistente.get();
            // Actualiza los campos del producto existente con los nuevos detalles
            // Es importante que los campos se actualicen individualmente para evitar
            // sobrescribir el ID
            if (productoDetalles.getNombre() != null) {
                producto.setNombre(productoDetalles.getNombre());
            }
            if (productoDetalles.getPrecio() != null) {
                producto.setPrecio(productoDetalles.getPrecio());
            }
            if (productoDetalles.getStock() != null) {
                producto.setStock(productoDetalles.getStock());
            }
            // Guarda el producto actualizado en la base de datos
            return productoRepositorio.save(producto);
        } else {
            // Si el producto no se encuentra, devuelve null para que el controlador pueda
            // manejar el 404
            return null;
        }
    }

    /**
     * @inheritDoc
     *             Implementación del método eliminar para la operación DELETE.
     *             Elimina un producto por ID y devuelve true si fue eliminado,
     *             false si no se encontró.
     * @param id El ID del producto a eliminar.
     * @return true si el producto fue eliminado, false si no se encontró.
     */
    @Override
    public boolean eliminar(Long id) {
        // Verifica si el producto existe antes de intentar eliminarlo
        if (productoRepositorio.existsById(id)) {
            productoRepositorio.deleteById(id);
            return true; // El producto fue eliminado exitosamente
        } else {
            return false; // El producto no fue encontrado
        }
    }
}