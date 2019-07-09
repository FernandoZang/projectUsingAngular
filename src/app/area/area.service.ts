import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthUtilService } from './../login/auth-util.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDefaultURL } from '../app.const';
import { Area } from './Area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  result: any;

  constructor(
    private httpClient: HttpClient,
    private authUtil: AuthUtilService
  ) { }


  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.authUtil.currentTokenValue,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }




  public getAll = () : Observable<Area[]> => {
    let cabecalho: HttpHeaders = this.getHeaders();
    let url = getDefaultURL('area');
    return this.httpClient.get<Area[]>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
  }








  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      alert("Occoreu um erro: "+ error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      switch(error.status){
        case 0:
            console.log("Ocorrência já cadastrada");
            break;
        case 400:
          alert("Registro já cadastrado da api");
            break;
        case 403:
          alert("Registro já cadastrado da api");
            break;
        case 404:
          alert("Registro não existe na api");
        break;
        default:
          console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}` + '\n Contate o administrador');
      }
    }
    return throwError('Something bad happened; please try again later.');
  }





}//AreaService
