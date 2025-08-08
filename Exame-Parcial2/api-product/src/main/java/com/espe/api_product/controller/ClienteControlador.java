package com.espe.api_product.controller;

import com.espe.api_product.model.Cliente;
import com.espe.api_product.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para la gestión de clientes.
 * Expone los endpoints para operaciones CRUD de clientes.
 */
@RestController
@RequestMapping("/api/clientes")
// Agregamos esta anotación para permitir peticiones desde el frontend.
// Esto soluciona el error de CORS (Cross-Origin Resource Sharing).
@CrossOrigin(origins = "*")
public class ClienteControlador {

    @Autowired
    private ClienteService clienteService;

    /**
     * Endpoint para obtener todos los clientes.
     * Mapea las solicitudes GET a /api/clientes.
     * * @return Una lista de todos los clientes.
     */
    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.listarTodos();
    }

    /**
     * Endpoint para obtener un cliente por su ID.
     * Mapea las solicitudes GET a /api/clientes/{id}.
     * Retorna un ResponseEntity para controlar el código de estado HTTP (200 OK o
     * 404 Not Found).
     * * @param id El ID del cliente a buscar.
     * 
     * @return ResponseEntity con el cliente si se encuentra, o 404 Not Found si no.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteService.obtenerPorId(id);
        return cliente.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Endpoint para crear un nuevo cliente.
     * Mapea las solicitudes POST a /api/clientes.
     * * @param cliente El objeto Cliente enviado en el cuerpo de la solicitud.
     * 
     * @return El cliente guardado, incluyendo el ID generado por la base de datos.
     */
    @PostMapping
    public Cliente crearCliente(@RequestBody Cliente cliente) {
        return clienteService.guardar(cliente);
    }

    /**
     * Endpoint para actualizar un cliente existente.
     * Mapea las solicitudes PUT a /api/clientes/{id}.
     * Retorna un ResponseEntity para controlar el código de estado HTTP (200 OK o
     * 404 Not Found).
     * * @param id El ID del cliente a actualizar.
     * 
     * @param clienteDetalles El objeto Cliente con los nuevos detalles.
     * @return ResponseEntity con el cliente actualizado si se encuentra, o 404 Not
     *         Found si no.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> actualizarCliente(@PathVariable Long id, @RequestBody Cliente clienteDetalles) {
        Cliente clienteActualizado = clienteService.actualizar(id, clienteDetalles);
        if (clienteActualizado != null) {
            return ResponseEntity.ok(clienteActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Endpoint para eliminar un cliente.
     * Mapea las solicitudes DELETE a /api/clientes/{id}.
     * Retorna un ResponseEntity para controlar el código de estado HTTP (204 No
     * Content o 404 Not Found).
     * * @param id El ID del cliente a eliminar.
     * 
     * @return ResponseEntity con 204 No Content si se elimina, o 404 Not Found si
     *         no se encuentra.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable Long id) {
        boolean eliminado = clienteService.eliminar(id);
        if (eliminado) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}