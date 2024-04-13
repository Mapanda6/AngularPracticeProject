import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
//Router instance
//Angular.giveMeRouter 
//Dependency injection Picked up

constructor(private router: Router, private hardcodedAuthService: HardcodedAuthenticationService){

}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  username = "in28mins";
  password= "";
  invalidLogin= false;
  errorMessage= "Invalid Credential";
  login(){
    if(this.hardcodedAuthService.authenticate(this.username, this.password)){
      //redirect to welcome page:
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false

    }else
     this.invalidLogin = true
  }
}
