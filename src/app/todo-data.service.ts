import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(name: string){
    return this.http.get<Todo[]>(`http://localhost:8080/user/${name}/todos`);
  }
}
