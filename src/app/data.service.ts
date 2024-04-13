import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }
  executeHelloWorldService(name: string){
    return this.http.get("http://localhost:8080/hello-world-bean");  
  }
  
}
