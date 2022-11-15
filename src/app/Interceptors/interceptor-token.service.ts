import { HttpEvent, HttpHandler, HttpHeaders, 
         HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor{

  constructor() { 
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${ token }`
    });
 
    const requestClone = request.clone({
      headers
    });
    
    return next.handle(requestClone);
  }
  
}
