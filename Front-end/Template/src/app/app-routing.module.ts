

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DescProductoComponent } from './components/desc-producto/desc-producto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MiembroequipoComponent } from './components/miembroequipo/miembroequipo.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'producto', component: ProductoComponent },
      { path: 'descripcionproducto', component: DescProductoComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'miembroequipo', component: MiembroequipoComponent },
      { path: 'checkout', component: CarritoComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-pass', component: ResetPassComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } // esta ruta captura cualquier otra ruta no definida
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }