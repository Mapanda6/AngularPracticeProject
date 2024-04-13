import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private hardcodedAuthService: HardcodedAuthenticationService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.hardcodedAuthService.isUserLoggedIn()){
      return true;
    }
   else{
      this.router.navigate(['login'])
      return false;
  } 
    

  }
}

