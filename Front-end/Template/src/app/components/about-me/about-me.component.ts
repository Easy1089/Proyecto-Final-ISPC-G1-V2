import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  miembros = [
    { 
      name: 'Melisa Apaz',
      description: 'melisaapaz@gmail.com',
      image: 'assets/img/miembros/MelisApaz.jpeg'
    },
    {
      name: 'Mateo Antunez',
      description: 'mateoantunez0@gmail.com',
      image: 'assets/img/miembros/MateoAntunes.jpg'
    },
    {
      name: 'Salvador Berón',
      description: 'salvadorberon@gmail.com',
      image: 'assets/img/miembros/SalvadorBeron.jpg'
    },
    {
      name: 'Ana Eugenia Abregú',
      description: 'euge.abregu.ea@gmail.com',
      image: ''
    },
    {
      name: 'Dalma Ponce',
      description: 'p.d.f.1915@gmail.com',
      image: ''
    },
    {
      name: 'Jesica  Amaya',
      description: 'Jesicaeamaya@gmail.com ',
      image: ''
    }, 
    {
      name: 'Fabiola Benítez',
      description: 'fabiolaben03@gmail.com',
      image: ''
    }, 
    {
      name: 'Marcelo Apaz',
      description: 'marceysoleapazvidela@gmail.com',
      image: ''
    }
  ];

  addToCart(miembro: any) {
    // implement the add to cart functionality here
  }

  selectedMiembro: any;
  selectMiembro(miembro: any) {
    this.selectedMiembro = miembro;
  }
}
