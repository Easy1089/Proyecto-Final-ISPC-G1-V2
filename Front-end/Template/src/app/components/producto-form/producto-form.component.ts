import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})

export class ProductoFormComponent {  
  @Output() formularioCerrado = new EventEmitter<void>();
  productoForm!: FormGroup; 
  formularioEdicion!:FormGroup;
  categorias: any[] | undefined;
  errorMensaje: string | undefined;
  productoActual!: Producto 
  mostrarFormularioEdicion: boolean = false;
  idproducto: number =0;

  constructor(private formBuilder: FormBuilder, 
             private productoServ: ProductoService, 
             private router: Router,
             private routers: ActivatedRoute,
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

    this.formularioEdicion = this.formBuilder.group({
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

    this.routers.params.subscribe(params => {
      this.mostrarFormularioEdicion = params['editar'] === 'true';
      this.idproducto = params['id']
    });
    
    this.ObtenerCategorias(); 

    if (this.mostrarFormularioEdicion === true) {
      console.log("Llamando al editarProducto...", this.idproducto)
      this.editarProducto(this.idproducto);
    }
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

  editarProducto(idproducto: number) {
    this.productoServ.ObtenerProductoPorId(this.idproducto).subscribe({
      next: (productoData: any) => {
        this.productoActual = productoData.producto; 
        console.log("Producto actual:", this.productoActual);
        
        this.formularioEdicion.patchValue({
          codigo: this.productoActual.codigo,
          nombre: this.productoActual.nombre,
          descripcion: this.productoActual.descripcion,
          inventariominimo: this.productoActual.inventariominimo,
          preciodecosto: this.productoActual.preciodecosto,
          preciodeventa: this.productoActual.preciodeventa,
          categoria: this.productoActual.categoria,
          activoactualmente: this.productoActual.activoactualmente,
          imagen: this.productoActual.imagen,
          estado: this.productoActual.estado
        });
      },
      error: (errorData: any) => {
        console.error(errorData);
      }
    });
  }
  
  actualizarProducto(producto: Producto) {
    if (this.formularioEdicion.valid) {
      console.log('Producto actualizado:', this.formularioEdicion.value);
      // Obtener el usuario autenticado desde el servicio de autenticación
      console.log("Obteniendo usuario...");
      const usuario = this.authService.usuarioAutenticado;
      console.log("Usuario:", usuario);
  
      this.productoServ.onActualizarProducto(this.formularioEdicion.value, usuario).subscribe({
        next: (productoActualizado) => {
          console.log('Producto actualizado:', productoActualizado);
          // Restablece el formulario después de guardar
          this.formularioEdicion.reset();
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
