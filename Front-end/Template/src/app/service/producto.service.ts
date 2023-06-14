import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://127.0.0.1:8000";
  urlProductos = `${this.url}/api/productos`;
  urlProductoId = `${this.url}/api/api/productos`;

  constructor(private http: HttpClient) { }

  ObtenerProductos(): Observable<any> {
    return this.http.get<any[]>(this.urlProductos).pipe(
      catchError(this.handleError)
    );
  }

  ObtenerProductoPorId(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.urlProductoId}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  onCrearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.url}/api/productos`, producto).pipe(
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
