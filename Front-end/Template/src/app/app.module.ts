import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
//Importo los interceptors
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { PurchaseComponent } from './components/purchase/purchase.component';
import { AbmProductosComponent } from './components/abm-productos/abm-productos.component';
import { JwtInterceptor } from './service/interceptor';
import { ErrorInterceptor } from './service/error.interceptor';
import { UsuarioService } from './service/usuario.service';
import { AuthService } from './service/auth.service';
import { ErrorHttpInterceptor } from './interceptors/errorhttp.interceptor';
import { AuthGuard } from './service/auth.guard';
import { EstadoProductoDirective } from './directivas/estado-producto.directive';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';


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
    Pagina500Component,
    PurchaseComponent,
    AbmProductosComponent,
    EstadoProductoDirective,
    ProductoFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
