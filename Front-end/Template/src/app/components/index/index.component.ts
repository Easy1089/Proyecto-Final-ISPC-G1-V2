import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactos() {
    this.router.navigate(['/contacto'])
  }

  catalogo(){
    this.router.navigate(["/catalogo"])
  }
}
