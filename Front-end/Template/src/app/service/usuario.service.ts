import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://127.0.0.1:8000";
  urlServicioId = `${this.url}/api/usuarios`;
  constructor(private http:HttpClient) { }

  onCrearUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("http://127.0.0.1:8000/api/auth/signup/", usuario);
  }

  onObtenerUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("http://127.0.0.1:8000/api/auth/signup/", usuario);
  }

  ObtenerUsuarioPorId(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.urlServicioId}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
