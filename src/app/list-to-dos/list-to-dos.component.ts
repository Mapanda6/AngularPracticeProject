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
    this.retrieveTodos('Manisha');
    // throw new Error('Method not implemented.');
  }
  retrieveTodos(name: string) {
    this.todoService.retrieveAllTodos(name).subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    }, error => new Error('Failed due to unknow reason'));
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
    this.todoService.DeleteTodo('Manisha', id).subscribe((deleteId) => {
      console.log(deleteId);
      this.message = `Delete of  id ${id} is successful.`;

    });
  }

}
