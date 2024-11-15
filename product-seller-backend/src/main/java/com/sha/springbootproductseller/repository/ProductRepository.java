package com.sha.springbootproductseller.repository;

import com.sha.springbootproductseller.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
