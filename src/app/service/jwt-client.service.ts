import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {


  constructor(private http:HttpClient) { }

  public genetateToken(request:any):Observable<any>{
    return this.http.post(API_URL +"/login", request,{responseType: 'text' as 'json'})
  }
}
