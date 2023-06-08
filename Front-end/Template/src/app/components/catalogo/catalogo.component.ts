import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
  productos: any[] | undefined;

  constructor(private producto: ProductoService) {}

  ngOnInit(): void {
    this.producto.ObtenerProductos().subscribe({
      next: (response) => {
        console.log(response.productos);
        this.productos = response.productos; // Extraer el array de productos de la respuesta
      },
      error: (errorData) => {
        console.error(errorData);
      }
    });
  }
}


/*
products = [
    { 
      name: 'Cabernet Sauvignon',
      description: 'Descripción producto  1',
      precio: 125.50,
      image: 'assets/img/catalogo/Vino1.jpg',
    },
    {
      name: 'Amelia Pinot Noir',
      description: 'Descripción producto  2',
      image: 'assets/img/catalogo/Vino2.jpg',
      precio: 80.50
    },
    {
      name: 'Merlot',
      description: 'Descripción producto 3',
      image: 'assets/img/catalogo/Vino3.jpg',
      precio: 189.50
    },
    {
      name: 'Syrah',
      description: 'Descripción producto  4',
      image: 'assets/img/catalogo/Vino4.jpg',
      precio: 1859.50
    },
    {
      name: 'Carmenere',
      description: 'Descripción producto  5',
      image: './assets/img/catalogo/Vino5.jpg',
      precio: 1500
    },
    {
      name: 'Malbec',
      description: 'Descripción producto  6',
      image: 'assets/img/catalogo/Vino6.jpg',
      precio: 8925.50
    },
    {
      name: 'Cabernet Sauvignon',
      description: 'Descripción producto  7',
      image: 'assets/img/catalogo/Vino7.jpg',
      precio: 8265.50
    },
    {
      name: 'Rosado',
      description: 'Descripción producto  8',
      image: 'assets/img/catalogo/Vino9.jpg',
      precio: 777.99
    },
    {
      name: 'Ondulé',
      description: 'Descripción producto  9',
      image: 'assets/img/catalogo/Vino10.jpg',
      precio: 777.99
    },
    {
      name: 'Dancing Flame',
      description: 'Ojos del Salado - 2018 - Chardonnay',
      image: 'assets/img/catalogo/Vino11.jpg',
      precio: 777.99
    },
    {
      name: '19 Crimes',
      description: 'Pinot Noir',
      image: 'assets/img/catalogo/Vino12.jpg',
      precio: 777.99
    },
    {
      name: 'Grand Vin de Bordeaux',
      description: 'Esprit de Puisseguin - 2016 - France',
      image: 'assets/img/catalogo/Vino13.jpg',
      precio: 777.99
    },
    {
      name: 'Jacobs Creek',
      description: 'Classic - Vintage 2018 - Australia',
      image: 'assets/img/catalogo/Vino14.jpg',
      precio: 777.99
    },
    {
      name: 'Tabernero - Gran Rosé',
      description: 'Semi seco - Afrutado - 2020 - ICA Perú',
      image: 'assets/img/catalogo/Vino16.jpg',
      precio: 777.99
    }
  ];

  addToCart(product: any) {
    // implement the add to cart functionality here
  }

  selectedProduct: any;
  selectProduct(product: any) {
    this.selectedProduct = product;
  } */