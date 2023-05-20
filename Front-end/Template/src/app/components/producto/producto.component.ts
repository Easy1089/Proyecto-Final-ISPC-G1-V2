import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  @Input() product: any;

  constructor(private router: Router) { }

  descproducto() {
    this.router.navigate(['/descripcionproducto'])
  }
}
