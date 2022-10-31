import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../entity/app-user";
import {JwtClientService} from "../../service/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });


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
    this.getAccessToken(this.form.value)
  }

  logout(){
    localStorage.clear();
  }

}
