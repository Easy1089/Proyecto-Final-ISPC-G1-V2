import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para enviar los datos del formulario
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      console.log('Username:', username);
      console.log('Password:', password);

      // Aquí puedes llamar a un servicio para enviar los datos del formulario
      // this.authService.login(username, password);
    } else {
      // Marcar todos los campos del formulario como tocados para mostrar los mensajes de error
      this.markAllFieldsAsTouched();
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  markAllFieldsAsTouched() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
