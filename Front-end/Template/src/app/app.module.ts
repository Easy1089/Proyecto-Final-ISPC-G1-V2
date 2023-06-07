import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { Pagina500Component } from './components/pagina500/pagina500.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    CatalogoComponent,
    FooterComponent,
    NavbarComponent,
    CarritoComponent,
    DescProductoComponent,
    ContactoComponent,
    AboutMeComponent,
    ProductoComponent,
    MiembroequipoComponent,
    ResetPassComponent,
    UsuarioProfileComponent,
    PreguntasFrecuentesComponent,
    DashboardComponent,
    Pagina404Component,
    Pagina500Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
