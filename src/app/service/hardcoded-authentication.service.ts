import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username: string,password: string){
    console.log('before' + this.isUserLoggedIn());
    
    if(username =="in28mins" && password==="dummy"){
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('After' + this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
   

  }
  isUserLoggedIn(){
   let user =  sessionStorage.getItem('authenticatedUser');
  // console.log(user);
   
   return !(user === null)
  }
  isUserLoggedOut(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
