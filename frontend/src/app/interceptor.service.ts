import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  private url:string = 'http://localhost:3000/a'

  constructor(private http:HttpClient){}

  getUsers(){
    let params = new HttpParams().append('page','1')

    params = params.append('page2', '3')
    return this.http.get( this.url , { params } )
    .pipe(
      map( (resp:any) => resp['data'] )
    )
  }
}
