import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.currentUser !== null;

    this.authService.esAdmin().subscribe(admin => {
      this.esAdmin = admin;
    });

    this.currentUser = this.authService.currentUser;
    // this.usuarioLogueado = this.currentUser.username !== undefined;
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

  logout() {
    // Lógica para cerrar sesión
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}
