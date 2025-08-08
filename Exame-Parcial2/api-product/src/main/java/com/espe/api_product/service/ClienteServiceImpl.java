package com.espe.api_product.service;

import com.espe.api_product.model.Cliente; // Importa la clase Cliente
import com.espe.api_product.repository.ClienteRepositorio; // Importa ClienteRepositorio
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementación concreta de la interfaz ClienteService.
 * Proporciona la lógica de negocio para las operaciones CRUD de clientes,
 * interactuando con ClienteRepositorio para la persistencia de datos.
 */
@Service // Marca esta clase como un componente de servicio de Spring
public class ClienteServiceImpl implements ClienteService {

    @Autowired // Inyecta una instancia de ClienteRepositorio
    private ClienteRepositorio clienteRepositorio;

    /**
     * @inheritDoc
     */
    @Override
    public List<Cliente> listarTodos() {
        return clienteRepositorio.findAll();
    }

    /**
     * @inheritDoc
     */
    @Override
    public Optional<Cliente> obtenerPorId(Long id) {
        return clienteRepositorio.findById(id);
    }

    /**
     * @inheritDoc
     */
    @Override
    public Cliente guardar(Cliente cliente) {
        return clienteRepositorio.save(cliente);
    }

    /**
     * @inheritDoc
     */
    @Override
    public Cliente actualizar(Long id, Cliente clienteDetalles) {
        Optional<Cliente> clienteExistente = clienteRepositorio.findById(id);

        if (clienteExistente.isPresent()) {
            Cliente cliente = clienteExistente.get();
            // Actualiza los campos del cliente existente con los nuevos detalles
            if (clienteDetalles.getCi() != null) {
                cliente.setCi(clienteDetalles.getCi());
            }
            if (clienteDetalles.getNombres() != null) {
                cliente.setNombres(clienteDetalles.getNombres());
            }
            if (clienteDetalles.getApellidos() != null) {
                cliente.setApellidos(clienteDetalles.getApellidos());
            }
            if (clienteDetalles.getContacto() != null) {
                cliente.setContacto(clienteDetalles.getContacto());
            }
            // Guarda el cliente actualizado en la base de datos
            return clienteRepositorio.save(cliente);
        } else {
            // Si el cliente no se encuentra, devuelve null
            return null;
        }
    }

    /**
     * @inheritDoc
     */
    @Override
    public boolean eliminar(Long id) {
        if (clienteRepositorio.existsById(id)) {
            clienteRepositorio.deleteById(id);
            return true; // Cliente eliminado exitosamente
        } else {
            return false; // Cliente no encontrado
        }
    }
}
