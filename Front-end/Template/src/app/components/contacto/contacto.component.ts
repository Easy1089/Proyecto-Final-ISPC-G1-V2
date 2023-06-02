import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  miFormulario!: FormGroup;
  nombre: string = '';
  correoElectronico: string = '';
  numeroTelefono: string = '';
  mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
    this.miFormulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      numeroTelefono: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  enviarMensaje() {
    if (this.miFormulario.invalid) {
      // El formulario no es válido, muestra mensajes de error
      this.miFormulario.markAllAsTouched();
      return;
    }

    const mensaje = `Gracias ${this.nombre} por enviarnos un mensaje. Responderemos en breve.`;
    window.alert(mensaje);
    console.log('Mensaje enviado');
    console.log('Nombre:', this.nombre);
    console.log('Correo electrónico:', this.correoElectronico);
    console.log('Número de teléfono:', this.numeroTelefono);
    console.log('Mensaje:', this.mensaje);

    // Restablece los valores del formulario después de enviar el mensaje
    this.miFormulario.reset();
  }
}
