import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  [x: string]: any;
  errorMensaje: string | null = null;
  
  //returnUrl: string;
   form:FormGroup;
   constructor(private formBuilder: FormBuilder,
     private authService: AuthService,
     private router: Router) {
     this.form= this.formBuilder.group(
       {
         password:['',[Validators.required, Validators.minLength(8)]],
         email:['', [Validators.required, Validators.email]]   
       }
     )
    }

   get Password()
   {
     return this.form.get("password");
   }

   get Mail()
   {
    return this.form.get("email");
   }
   
   get PasswordValid()
   {
     return this.Password?.touched && !this.Password?.valid;
   }
   
   get MailValid()
   {
     return this.Mail?.touched && !this.Mail?.valid;
   }   
 
   ngOnInit(): void {
     this['returnUrl'] = this['route'].snapshot.queryParams.returnUrl || '/';
   }
   
   onEnviar(event: Event, usuario: Usuario): void {   
    event.preventDefault();
    this.authService.login(this.usuario).subscribe(
      data => {
        console.log("DATA" + JSON.stringify(data));   
        this.router.navigate(['/home']);
      },
      error => {
        console.error("Error al iniciar sesión:", error);
        this.errorMensaje = 'Credenciales inválidas. Por favor, verifique su correo electrónico y contraseña.';
      }
    );
  }
  
 }