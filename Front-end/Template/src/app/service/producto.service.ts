import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string="http://127.0.0.1:8000"

  constructor(private http:HttpClient) { 

  }

  ObtenerProductos(): Observable <any>
  {
    /*return this.http.get<any>('api/productos');*/
    return this.http.get<any[]>('api/productos');
  }

  ObtenerProductoPorId(id:number): Observable <any>
  {
    /*return this.http.get(this.url+"productos"+"/"+id);*/
    return this.http.get<any[]>('api/api/productos'+"/"+id);
  }

  onCrearProducto(usuario:Producto):Observable<Producto>{
    return this.http.post<Producto>("api/productos/", Producto);
  }
}
