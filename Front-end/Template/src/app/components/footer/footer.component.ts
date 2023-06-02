import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  suscripcionForm!: FormGroup;
  correoElectronico: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.suscripcionForm = this.formBuilder.group({
      correoElectronico: ['', [Validators.required, Validators.email]]
    });
  }

  enviarSuscripcion(event: Event) {
    event.preventDefault(); // Evita que se envíe el formulario y se recargue la página

    if (this.suscripcionForm.valid) {
      const mensaje = `Gracias por suscribirte a nuestro newsletter. Estarás recibiendo novedades a tu correo: ${this.suscripcionForm.value.correoElectronico}`;
      window.alert(mensaje);

      this.suscripcionForm.reset(); // Limpia el formulario después de enviar
    } else {
      // Si el formulario es inválido, muestra mensajes de error en los campos correspondientes
      this.suscripcionForm.markAllAsTouched();
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  inicio() {
    this.router.navigate(['']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  catalogo() {
    this.router.navigate(['/catalogo']);
  }

  contacto() {
    this.router.navigate(['/contacto']);
  }

  aboutme() {
    this.router.navigate(['/about-me']);
  }
}
