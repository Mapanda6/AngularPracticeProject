import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'', component: LoginComponent}, // conditions when this can be activated, RouteGuardService
  {path:'welcome/:name', component: WelcomeComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(RouteGuardService).canActivate(next, state)],
},
  {path: 'todos/:id',component: TodoComponent, canActivate:[RouteGuardService]},
  {path:'login', component: LoginComponent},
  {path:'todos', component: ListToDosComponent, canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(RouteGuardService).canActivate(next, state)]},
  {path:'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path:'**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
