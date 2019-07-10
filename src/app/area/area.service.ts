import { Solo } from './../solo/Solo';
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


  /*
  public cadastrar(description: string, geometry: string, id: number){
    let s: Solo = new Solo();
    s.id = id;
    const sStr = JSON.stringify( {s} );
    const body = JSON.stringify( {description:description, geometry:geometry, sStr  } );
    console.log(body);
    let cabecalho: HttpHeaders = this.getHeaders();
    let url = getDefaultURL('area');
    return this.httpClient.post( url, body, {headers: cabecalho} ).pipe(catchError(this.handleError));
  }
  */

 public cadastrar(description: string, geometry: string, id: number){
  
  const body = JSON.stringify( {description:description, geometry:geometry, soil:{id:id}  } );
  console.log(body);
  let cabecalho: HttpHeaders = this.getHeaders();
  let url = getDefaultURL('area');
  return this.httpClient.post( url, body, {headers: cabecalho} ).pipe(catchError(this.handleError));

 }



  public getById(id: number){
    let cabecalho: HttpHeaders = this.getHeaders();
    let url = getDefaultURL('area/' + id);
    console.log("url getById: " + url);
    this.result = this.httpClient.get<Area>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
    return this.result;
  }


  public editar(idArea: number, descricao: string, geometria: string, idSolo: number) {
    const body = JSON.stringify({ id: idArea, description: descricao, geometry:geometria, soil:{id:idSolo} });
    console.log("enviando: " + body);
    return this.httpClient
      .put( getDefaultURL('area'), body, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
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
