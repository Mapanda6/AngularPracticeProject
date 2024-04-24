import { Injectable } from '@angular/core';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
    return null
  }

  constructor() { }
  authenticate(username: string,password: string){
    console.log('before' + this.isUserLoggedIn());
    
    if(username =="test" && password==="test"){
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      //console.log('After' + this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
   

  }
  isUserLoggedIn(){
   let user =  sessionStorage.getItem(AUTHENTICATED_USER);
  // console.log(user);
   
   return !(user === null)
  }
  isUserLoggedOut(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}
