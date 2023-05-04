import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
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
  ];

  addToCart(product: any) {
    // implement the add to cart functionality here
  }

  selectedProduct: any;
  selectProduct(product: any) {
    this.selectedProduct = product;
  }
}
