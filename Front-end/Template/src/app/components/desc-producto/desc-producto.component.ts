import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc-producto',
  templateUrl: './desc-producto.component.html',
  styleUrls: ['./desc-producto.component.css']
})
export class DescProductoComponent implements OnInit {
  id:number=0;
  product: any;

  constructor(private route: ActivatedRoute, private productoServ: ProductoService){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.productoServ.ObtenerProductoPorId(this.id).subscribe({
      next: (productoData: any) => {
        console.log(productoData.producto);
        this.product=productoData.producto
      },
      error: (errorData: any) => {
        console.error(errorData);
      }
    })
  }
}


