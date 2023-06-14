import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://127.0.0.1:8000/api/auth/login/";
  urllogout="http://127.0.0.1:8000/api/auth/logout/";

  loggedIn= new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<Usuario | null>; // Cambia el tipo de dato
  currentUser: Observable<Usuario | null>;

  constructor(private http:HttpClient) {
    console.log("Servicio de autentificación corriendo...");
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   login(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.url, usuario)
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.currentUser = data;
        this.loggedIn.next(true);
        console.log(data);
        
        return data;
      }),
      catchError(error => {
        // Manejar el error aquí
        console.log("Error de inicio de sesión:", error);
        throw error; // Relanzar el error para que se maneje en el componente que llama al método
      }));
  }
  
  logout(usuario: Usuario): Observable<any> {
    console.log("Deslogueo desde servicio auth...", usuario);
    return this.http.post<any>(this.urllogout, usuario)
      .pipe(map(data => {
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.currentUserSubject.next(null); // Establecer el usuario actual como null
        
        console.log("Data:", data);
        console.log("Usuario:", usuario);
      }),
      catchError(error => {
        // Manejar el error aquí
        console.log("Error de cierre de sesión:", error);
        throw error; // Relanzar el error para que se maneje en el componente que llama al método
      }));
  }
  
  esAdmin(): Observable<boolean> {
    return this.currentUserSubject.pipe(
      map((usuario: Usuario | null) => usuario?.is_superuser || false)
    );
  }
  
  usuarioLogueado(): Observable<number | null> {
    return this.currentUserSubject.pipe(
      map((usuario: Usuario | null) => usuario?.id || null)
    );
  }
  
  get usuarioAutenticado(): Usuario | null {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
   
    return this.loggedIn.asObservable();
  }
}

export { Usuario };