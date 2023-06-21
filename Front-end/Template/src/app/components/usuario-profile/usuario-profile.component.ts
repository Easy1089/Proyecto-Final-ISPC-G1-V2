import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-usuario-profile',
  templateUrl: './usuario-profile.component.html',
  styleUrls: ['./usuario-profile.component.css']
})
export class UsuarioProfileComponent {
  accountForm!: FormGroup;
  idUsuario: number =0;
  usuarioActual!: Usuario; 
  imagenURL!: string;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,
             private router: Router,
             private routers: ActivatedRoute,) { 
              this.imagenURL = '';
             }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      direccion: ['', Validators.required],
      fechadenacimiento: ['', Validators.required],
      imagen: ['']
    });

  

    this.routers.params.subscribe(params => {
      this.idUsuario = params['id']
    });

    console.log("Llamando al editar")
    this.editarPerfil(this.idUsuario)
    console.log("Llamando al obtener imagen")
    this.obtenerURLImagen();
  }

  obtenerURLImagen() {
    this.imagenURL = this.accountForm.get('imagen')?.value;
  }

  saveChanges(): void {
    // Lógica para guardar los cambios del formulario
  }

  editarPerfil(idUsuario: number) {
    this.usuarioService.ObtenerUsuarioPorId(this.idUsuario).subscribe({
      next: (usuarioData: any) => {
        this.usuarioActual = usuarioData.usuario; 
        console.log("Usuario actual:", this.usuarioActual);
        
        this.accountForm.patchValue({
          email: this.usuarioActual.email,
          username: this.usuarioActual.username,
          first_name: this.usuarioActual.first_name,
          last_name: this.usuarioActual.last_name,
          imagen: this.usuarioActual.imagen,
          direccion: this.usuarioActual.direccion,
          fechadenacimiento: this.usuarioActual.fechadenacimiento,
          id:this.usuarioActual.id,
        });
        
      },
      error: (errorData: any) => {
        console.error(errorData);
      }
    });
  }

}
