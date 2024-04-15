import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { error } from 'cypress/types/jquery';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number, public desc: string, public done: boolean, public targetDate: Date, public username: string,) {

  }
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos: Todo[] = [];
  message: string ="";

  constructor(private todoService: TodoDataService, private router: Router) {

  }
  ngOnInit(): void {
    this.refreshTodos('Manisha');
    // throw new Error('Method not implemented.');
  }
  refreshTodos(name: string) {
    this.todoService.retrieveAllTodos(name).subscribe((response)=>{
      console.log(response);
      this.todos = response;
    });
  }
  updateTodo(id: number, name: string) {
    console.log("update" + id);
   /*  this.router.navigate(['todos', id]);
    this.todoService.updateTodos(name, id).subscribe((updateId) =>{
        console.log(updateId);
        
    });*/

  } 
  deleteTodo(name: string, id: number) {
    console.log("delete" + id);
    this.todoService.deleteTodo('Manisha', id).subscribe((responseFromDelete) => {
      console.log(responseFromDelete);
      this.todos = responseFromDelete;
      this.message = `Delete of  id ${id} is successful.`;
    });
  }

}
