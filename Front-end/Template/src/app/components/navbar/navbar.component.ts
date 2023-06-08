import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: `
          <div *ngIf="isLoggedIn"> Bienvenido, {{ currentUser.username }}</div>`
  })

export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: any;

  constructor(private router: Router, private authService: AuthService) { 
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.currentUser != null;
    this.currentUser = this.authService.currentUser;
  }
  
  inicio(){
    this.router.navigate([""])
  }

  login() {
    this.router.navigate(['/login'])
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
  carrito() {
    this.router.navigate(['/checkout'])
  }
}
