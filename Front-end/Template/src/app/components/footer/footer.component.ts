
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  correoElectronico: string = '';

  enviarSuscripcion(event: Event) {
    event.preventDefault(); // Evita que se envíe el formulario y se recargue la página

    const mensaje = `Gracias por suscribirte a nuestro newsletter. Estarás recibiendo novedades a tu correo: ${this.correoElectronico}`;
    window.alert(mensaje);
    
    this.correoElectronico = ''; // Limpia el campo de correo electrónico después de enviar
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  constructor(private router: Router) { }

  inicio(){
    this.router.navigate([''])
  }
  register() {
    this.router.navigate(['/register'])
  }
  catalogo() {
    this.router.navigate(['/catalogo'])
  }
  contacto() {
    this.router.navigate(['/contacto'])
  }
  aboutme() {
    this.router.navigate(['/about-me'])
  }

  ngOnInit(): void {
  }

}
