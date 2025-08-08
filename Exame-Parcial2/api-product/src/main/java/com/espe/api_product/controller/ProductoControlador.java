package com.espe.api_product.controller;

import com.espe.api_product.model.Producto;
import com.espe.api_product.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity; // Importar ResponseEntity para respuestas HTTP más controladas
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional; // Importar Optional para manejar la ausencia de un producto

@RestController // Indica que esta clase es un controlador REST
@RequestMapping("/api/productos") // Define la ruta base para todos los endpoints de este controlador
// Agregamos esta anotación para permitir peticiones desde el frontend.
// Esto soluciona el error de CORS.
@CrossOrigin(origins = "*")
public class ProductoControlador {

    @Autowired // Inyecta la dependencia de ProductoService
    private ProductoService productoService;

    /**
     * Endpoint para obtener todos los productos.
     * Mapea las solicitudes GET a /api/productos.
     * * @return Una lista de todos los productos.
     */
    @GetMapping
    public List<Producto> listarProductos() {
        return productoService.listarTodos();
    }

    /**
     * Endpoint para obtener un producto por su ID.
     * Mapea las solicitudes GET a /api/productos/{id}.
     * Retorna un ResponseEntity para controlar el código de estado HTTP (200 OK o
     * 404 Not Found).
     * * @param id El ID del producto a buscar.
     * 
     * @return ResponseEntity con el producto si se encuentra, o 404 Not Found si
     *         no.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Long id) {
        // El servicio devuelve un Optional<Producto> para manejar si el producto existe
        // o no
        Optional<Producto> producto = productoService.obtenerPorId(id);
        // Si el producto está presente, devuelve 200 OK con el producto.
        // Si no está presente, devuelve 404 Not Found.
        return producto.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Endpoint para crear un nuevo producto.
     * Mapea las solicitudes POST a /api/productos.
     *  
     * 
     * @param producto El objeto Producto enviado en el cuerpo de la solicitud.
     * @return El producto guardado, incluyendo el ID generado por la base de datos.
     */
    @PostMapping
    public Producto crearProducto(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    /**
     * Endpoint para actualizar un producto existente.
     * Mapea las solicitudes PUT a /api/productos/{id}.
     * Retorna un ResponseEntity para controlar el código de estado HTTP (200 OK o
     * 404 Not Found).
     * * @param id El ID del producto a actualizar.
     * 
     * @param productoDetalles El objeto Producto con los nuevos detalles.
     * @return ResponseEntity con el producto actualizado si se encuentra, o 404 Not
     *         Found si no.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoDetalles) {
        // El servicio intenta actualizar el producto. Si el ID no existe, puede
        // devolver null o lanzar una excepción.
        // Aquí asumimos que el servicio devuelve el producto actualizado o null si no
        // se encuentra.
        Producto productoActualizado = productoService.actualizar(id, productoDetalles);
        if (productoActualizado != null) {
            return ResponseEntity.ok(productoActualizado); // Devuelve 200 OK con el producto actualizado
        } else {
            return ResponseEntity.notFound().build(); // Devuelve 404 Not Found
        }
    }

    /**
     * Endpoint para eliminar un producto.
     * Mapea las solicitudes DELETE a /api/productos/{id}.
     * Retorna un ResponseEntity para controlar el código de estado HTTP (204 No
     * Content o 404 Not Found).
     * * @param id El ID del producto a eliminar.
     * 
     * @return ResponseEntity con 204 No Content si se elimina, o 404 Not Found si
     *         no se encuentra.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        // El servicio intenta eliminar el producto. Devuelve true si se eliminó, false
        // si no se encontró.
        boolean eliminado = productoService.eliminar(id);
        if (eliminado) {
            return ResponseEntity.noContent().build(); // Devuelve 204 No Content (éxito sin cuerpo de respuesta)
        } else {
            return ResponseEntity.notFound().build(); // Devuelve 404 Not Found
        }
    }
}
