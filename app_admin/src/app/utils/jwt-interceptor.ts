import { inject,} from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from '../services/authentication';

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authenticationService = inject(Authentication);

  // console.log('Interceptor::URL' + request.url);
  const isAuthAPI = req.url.startsWith('login') || req.url.startsWith('register');

  if(authenticationService.isLoggedIn() && !isAuthAPI){
    let token = authenticationService.getToken();
    // console.log(token);
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  
  return next(req);
};
