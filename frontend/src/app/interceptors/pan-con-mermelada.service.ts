import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanConMermeladaService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const headers = new HttpHeaders({ 'x-token': '1234567890' })

      const reqClone = req.clone({ headers })
      return next.handle( reqClone ).pipe(
        catchError(this.controlError)
      )
  }

  controlError(err:HttpErrorResponse){
    return throwError('Esto no se pudo hacer!!!')
  }
}
