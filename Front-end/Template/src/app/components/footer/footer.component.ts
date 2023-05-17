import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
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
