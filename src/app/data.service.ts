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
   const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':this.createBasiAuth(),
    })
  };
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, httpOptions);  
  }
  createBasiAuth(){
    let userName = 'test';
    let password = 'test';
    let basicAuthHeaderString = 'Basic'+ window.btoa('user'+ ':'+ 'password');
    return basicAuthHeaderString;

  }
  
}
