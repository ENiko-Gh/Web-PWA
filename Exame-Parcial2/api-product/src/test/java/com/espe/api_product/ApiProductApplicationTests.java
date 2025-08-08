package com.espe.api_product;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = ApiProductApplication.class)
@ActiveProfiles("test")
class ApiProductApplicationTests {
	@Test
	void contextLoads() {
		// Solo verifica que el contexto se carga
	}
}