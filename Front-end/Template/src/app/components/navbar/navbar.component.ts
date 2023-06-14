import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Usuario } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: any;
  esAdmin: boolean = false;
  usuarioLogueado: boolean = false;
  errorMensaje: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = user !== null;
      this.currentUser = user;
    });
    
    this.authService.esAdmin().subscribe(admin => {
      this.esAdmin = admin;
    });

    this.currentUser = this.authService.currentUser;
  }

  inicio() {
    this.router.navigate([""]);
  }

  login() {
    this.router.navigate(['/login']);
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

  carrito() {
    this.router.navigate(['/checkout']);
  }
  profile() {
    this.router.navigate(['/usuarioprofile']);
  }

  logout(event: Event, usuario:Usuario): void {  
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace o botón
    
    if (this.currentUser) {
      this.authService.logout(this.currentUser).subscribe(
        () => {
          this.router.navigate(['/home']);
          location.reload(); // Forzar el refresco de la página
        },
        error => {
          console.error("Error al cerrar sesión:", error);
          this.errorMensaje = 'Ocurrió un error al cerrar sesión. Por favor, inténtalo de nuevo más tarde.';
        }
      );
    } else {
      console.warn("No hay usuario actualmente logueado.");
    }
  }
}
