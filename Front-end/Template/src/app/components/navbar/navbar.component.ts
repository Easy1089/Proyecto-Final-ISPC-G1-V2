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
      this.currentUser = user;
      this.isLoggedIn = user !== null;
    });

    this.authService.esAdmin().subscribe(admin => {
      this.esAdmin = admin;
    });
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

  ambproductos() {
    this.router.navigate(['/abmproductos']);
  }

  logout(event: Event): void {
    event.preventDefault();
  
    if (this.currentUser) {
      console.log("Llamando al deslogueo desde navbar.")
      this.authService.logout(this.currentUser).subscribe({
        next: (data) => {
          this.router.navigate(['/home']);  
          this.currentUser = null; // Establecer el usuario actual como null
          this.errorMensaje = null; // Limpiar el mensaje de error
          //location.reload(); // Forzar el refresco de la página
        },
        error: (error) => {
          console.error("Error al cerrar sesión:", error);
          this.errorMensaje = 'Ocurrió un error al cerrar sesión. Por favor, inténtalo de nuevo más tarde.';
        }
      });
    } else {
      console.warn("No hay usuario actualmente logueado.");
    }
  }  
}
