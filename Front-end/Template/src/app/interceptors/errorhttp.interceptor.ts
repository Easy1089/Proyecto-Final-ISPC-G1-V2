import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Error de lado del cliente
          console.error('Error del cliente:', error.error.message);
        } else {
          // Error del lado del servidor
          console.error(`Código de error ${error.status}, ` + `mensaje: ${error.error.message}`);
        }
        return throwError(() => error);
      })
    );
  }
}
