import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService} from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  usuario: Usuario = new Usuario();
  
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { 
    this.form= this.formBuilder.group(
      {
        nombre:['', [Validators.required]],
        apellido:['', [Validators.required]],
        username:['', [Validators.required]],
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required]],
        email:['', [Validators.required, Validators.email]]   
      }
    )
  }
 
  ngOnInit(): void {
  }
 
  onEnviar(event: Event, usuario:Usuario): void {
    event.preventDefault; 
  
    if (this.form.valid)
    {
      console.log("Enviando  al servidor...");
      console.log(usuario);

      this.usuarioService.onCrearUsuario(usuario).subscribe(
        (response: Usuario) => {
          console.log("La solicitud HTTP fue exitosa");
          console.log(response); 
          alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
          this.router.navigate(['/login'])
        })
    }
    else
    {
      this.form.markAllAsTouched(); 
    }
  };
  
  get Password()
  {
    return this.form.get("password");
  }

  get Nombre()
  {
    return this.form.get("nombre");
  }


  get Apellido()
  {
    return this.form.get("apellido");
  }

  get ConfirmPassword()
  {
    return this.form.get("confirmPassword");
  }
 
  get Mail()
  {
   return this.form.get("email");
  }
 
  get Username()
  {
   return this.form.get("email");
  }

  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }
 
  get PasswordValid()
  {
    return this.Password?.touched && !this.Password?.valid;
  }
 
  get ConfirmPasswordValid()
  {
    return this.ConfirmPassword?.touched && !this.ConfirmPassword?.valid;
  }

  get NombreValid()
  {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
 
  get ApellidoValid()
  {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }
}
