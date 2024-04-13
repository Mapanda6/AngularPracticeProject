import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);  
  }
  
}
