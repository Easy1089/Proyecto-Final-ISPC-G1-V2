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

  constructor(private route: ActivatedRoute, private producto: ProductoService){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.producto.ObtenerProductoPorId(this.id).subscribe({
      next: (productoData: any) => {
        this.product=productoData
      },
      error: (errorData: any) => {
        console.error(errorData);
      }
    })
  }
}


