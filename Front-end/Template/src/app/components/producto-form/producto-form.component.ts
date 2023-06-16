import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})

export class ProductoFormComponent {  
  @Output() formularioCerrado = new EventEmitter<void>();
  productoForm!: FormGroup; // Agregado el operador "!"
  categorias: any[] | undefined;
  errorMensaje: string | undefined;

  constructor(private formBuilder: FormBuilder, 
             private productoServ: ProductoService, 
             private router: Router,
             private authService: AuthService) { }

  ngOnInit() {
    this.productoForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      inventariominimo: [20, Validators.required],
      preciodecosto: [2000, Validators.required],
      preciodeventa: [2000, Validators.required],
      categoria: ['', Validators.required],
      activoactualmente: [true, Validators.required],
      imagen: [''],
      estado: ['A', Validators.required]
    });

     this.ObtenerCategorias(); //
  }

  ObtenerCategorias() {
     this.productoServ.ObtenerCategorias().subscribe({
      next: (response) => {
        console.log(response.categorias);
        this.categorias = response.categorias; // Extraer el array de categorias de la respuesta
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje = 'Ocurrió un error al obtener las categorías. Por favor, inténtalo de nuevo más tarde.';
      }
  });
  }

  guardarProducto() {
    if (this.productoForm.valid) {
      console.log('Producto guardado:', this.productoForm.value);
       // Obtener el usuario autenticado desde el servicio de autenticación
      console.log("Obteniendo usuario...");
      const usuario = this.authService.usuarioAutenticado;
      console.log("Usuario:", usuario);
      this.productoServ.onCrearProducto(this.productoForm.value, usuario).subscribe({
        next: (productoCreado) => {
          console.log('Producto creado:', productoCreado);
          // Restablece el formulario después de guardar
          this.productoForm.reset();
          // Volver al componente AbmProductosComponent
          this.router.navigate(['/abmproductos']);
        },
        error: (error) => {
          console.error(error);
          // Manejar el error según sea necesario
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }  
}
