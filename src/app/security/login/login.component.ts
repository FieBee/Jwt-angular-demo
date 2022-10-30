import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../entity/app-user";
import {JwtClientService} from "../../service/jwt-client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  app_user: AppUser={
    username:"",
    password:""
  }
  constructor(private jwtService:JwtClientService) { }

  ngOnInit(): void {

  }

  public getAccessToken(account: any){
    let resp = this.jwtService.genetateToken(account);
    console.log(resp)

    resp.subscribe(data => {
      localStorage.setItem("data",data);
      localStorage.setItem("token",JSON.parse(data).token);
      localStorage.setItem("role",JSON.parse(data).roles[0].name);

    }

    );

  }



  login() {
    this.getAccessToken(this.app_user)
  }

  logout(){
    localStorage.clear();
  }

}
