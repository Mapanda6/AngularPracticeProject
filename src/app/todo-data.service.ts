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
  deleteTodo(name: string, id: number){
    console.log(`http://localhost:8080/user/${name}/todos/${id}`);
    
    return this.http.delete<Todo[]>(`http://localhost:8080/user/${name}/todos/${id}`);
  }
  updateTodos(name: string, id: number, todo: Todo){
    return this.http.put<Todo>(`http://localhost:8080/user/${name}/todos/${id}`, todo);
  } 
  retrieveTodo(id: number, username: string){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`);
  }
  createTodos(name: string, id: number, todo: Todo){
    return this.http.post<Todo>(`http://localhost:8080/user/${name}/todos/${id}`, todo);
  } 
}
