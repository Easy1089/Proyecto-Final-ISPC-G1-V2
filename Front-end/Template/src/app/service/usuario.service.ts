import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  onCrearUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("http://127.0.0.1:8000/api/auth/signup/", usuario);
  }
}
