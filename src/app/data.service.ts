import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }
  executeHelloWorldService(name: string){
    let basicAuthHeaderString = this.createBasiAuth();
   // let authorizationData = 'Basic ' + btoa(username + ':' + password);

    let headers = new HttpHeaders({
        'Authorization': this.createBasiAuth()
      });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});  
  }
  createBasiAuth(){
    let userName = 'user';
    let password = 'password';
    let basicAuthHeaderString = 'Basic'+ window.btoa('user'+ ':'+ 'password');
    return basicAuthHeaderString;

  }
  
}
