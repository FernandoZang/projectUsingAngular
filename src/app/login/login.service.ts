import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { getDefaultURL } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'Accept': 'text/plain'
    });
  }

  public login = (login: string, password: string): Observable<string> => {
    const body = JSON.stringify( { login: login, password: password } );
    console.log(body);
    console.log( getDefaultURL('auth/login') );
    return this.http.post<string>(
      getDefaultURL('auth/login'),
      body,
      { headers: this.getHeaders(), responseType: 'text' as 'json'}
    ).pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }


}//endof :class



