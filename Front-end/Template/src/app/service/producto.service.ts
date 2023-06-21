import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../models/Producto';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://127.0.0.1:8000";
  urlProductos = `${this.url}/api/productos`;
  urlCategorias = `${this.url}/api/categorias`;
  urlProductoId = `${this.url}/api/productos`;

  constructor(private http: HttpClient) { }

  ObtenerProductos(): Observable<any> {
    return this.http.get<any[]>(this.urlProductos).pipe(
      catchError(this.handleError)
    );
  }

  ObtenerCategorias(): Observable<any> {
    console.log("Get de categorías...")
    return this.http.get<any[]>(this.urlCategorias).pipe(
      catchError(this.handleError)
    );
  }

  ObtenerProductoPorId(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.urlProductoId}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  onCrearProducto(producto: Producto, usuario: any): Observable<Producto> {
    const body = { producto, usuario };
    return this.http.post<Producto>(`${this.urlProductos}/`, body).pipe(
      catchError(this.handleError)
    );
  }

  onActualizarProducto(producto: Producto, usuario: any): Observable<Producto> {
    const body = { producto, usuario };
    return this.http.put<any>(`${this.urlProductoId}/${producto.id}`, body).pipe(
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
