import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://127.0.0.1:8000/api/auth/login/";
  loggedIn= new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<Usuario>;
  currentUser: Observable<Usuario>;

  constructor(private http:HttpClient) {
    console.log("Servicio de autentificación corriendo...");
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
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
      }));   
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    
  }

  get usuarioAutenticado(): Usuario {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
   
    return this.loggedIn.asObservable();
  }
}

export { Usuario };
/*
 private loginUrl = 'http://127.0.0.1:8000/api/auth/login/';  // Reemplaza con la URL correcta
  private urlRegister = 'http://127.0.0.1:8000/api/auth/signup/'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable <any> {
    const credentials = {
      email: email,
      password: password
    };

    return this.http.post(this.loginUrl, credentials);
  }
*/