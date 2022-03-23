package com.example.booking.controller;

import com.example.booking.model.Product;
import com.example.booking.repository.ProductRepository;
import com.example.booking.service.FilesStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api") //tro den API
public class ProductsController {
    @Autowired
    ProductRepository productRepository; //autowired truc tiep ket noi voi productRepository
    @Autowired
    FilesStorageService storageService;
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        try{
            List<Product> products = new ArrayList<Product>();
            productRepository.findAll().forEach(products::add);
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestParam("file") MultipartFile file, @RequestBody Product product){

        try {
            storageService.save(file);
            product.setImage(file.getOriginalFilename());
            Product newProduct = productRepository.save(product);
            return new ResponseEntity<>(newProduct,HttpStatus.CREATED); //HttpStatus.CREATED: tra ve httpstatus code 201:tao thanh cong
        }
        catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }
}
