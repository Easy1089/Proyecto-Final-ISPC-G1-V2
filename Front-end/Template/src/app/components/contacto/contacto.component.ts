import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre: string = '';
  correoElectronico: string = '';
  numeroTelefono: string = '';
  mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje() {
    const mensaje = `Gracias ${this.nombre} por enviarnos un mensaje. Responderemos en breve.`;
    window.alert(mensaje);
    console.log('Mensaje enviado');
    console.log('Nombre:', this.nombre);
    console.log('Correo electrónico:', this.correoElectronico);
    console.log('Número de teléfono:', this.numeroTelefono);
    console.log('Mensaje:', this.mensaje);
  }
}
