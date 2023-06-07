import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina500',
  templateUrl: './pagina500.component.html',
  styleUrls: ['./pagina500.component.css']
})
export class Pagina500Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home'])
  }
}

