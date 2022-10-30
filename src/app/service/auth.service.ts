import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated():boolean{
    const token = localStorage.getItem("token")!;
    const role = localStorage.getItem("role")!;
    if (token && role){
      return true;
    }else {
      return false
    }
  }

  // public isAdmin():boolean{
  //   if (localStorage.getItem("role") == "ROLE_ADMIN"){
  //     return true
  //   }else{
  //     return false
  //   }
  // }

}
