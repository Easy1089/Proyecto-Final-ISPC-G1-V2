

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
import { UsuarioProfileComponent } from './components/usuario-profile/usuario-profile.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
//Importo AuthGuard para poder validar si el usuario está logueado o no

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'descripcionproducto', component: DescProductoComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'miembroequipo', component: MiembroequipoComponent },
  { path: 'checkout', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-pass', component: ResetPassComponent },
  { path: 'usuarioprofile', component: UsuarioProfileComponent, canActivate: [AuthGuard] },
  { path: 'preguntasfrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'descripcionproducto/:id', component: DescProductoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } // esta ruta captura cualquier otra ruta no definida
];

/*Esta instrucción se agrega sólo para cuando el usuario esté logueado*/
/*, canActivate: [AuthGuard]*/ 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

