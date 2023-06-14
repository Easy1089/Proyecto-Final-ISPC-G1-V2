import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: any[] | undefined;
  errorMensaje: string | undefined;

  constructor(private productoServ: ProductoService) {}

  ngOnInit(): void {
    this.productoServ.ObtenerProductos().subscribe({
      next: (response) => {
        console.log(response.productos);
        this.productos = response.productos; // Extraer el array de productos de la respuesta
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje = 'Ocurrió un error al obtener los productos. Por favor, inténtalo de nuevo más tarde.';
      }
  });
  }
}