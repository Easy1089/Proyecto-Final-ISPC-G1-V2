import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEstadoProducto]'
})
export class EstadoProductoDirective implements OnInit {
  @Input('appEstadoProducto') estado: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const estadoTexto = this.estado ? 'Activado' : 'Desactivado';
    this.elementRef.nativeElement.innerText = estadoTexto;
  }
}
