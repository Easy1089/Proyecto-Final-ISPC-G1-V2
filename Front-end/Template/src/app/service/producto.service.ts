import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string="http://localhost:3000/"

  constructor(private http:HttpClient) { 

  }

  ObtenerProductos(): Observable <any>
  {
    return this.http.get(this.url+"productos");
  }

  ObtenerProductoPorId(id:number): Observable <any>
  {
    return this.http.get(this.url+"productos"+"/"+id);
  }
}
