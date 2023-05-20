import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  @Input() product: any;
  id:number=0;
  rutaActiva: any;

  constructor(private router: Router) { }

  descproducto(id:number) {
    this.id = id;
    this.router.navigate(['/descripcionproducto/'+ this.id])
  }
}

/*constructor(private rutaActiva: ActivatedRoute) { }

ngOnInit() {
  this.rutaActiva.params.subscribe((params: Params)=> {
    this.id = this.rutaActiva.snapshot.params["id"]
  });
}*/