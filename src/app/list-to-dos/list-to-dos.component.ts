import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { error } from 'cypress/types/jquery';

export class Todo{
  constructor(public id: number,  public desc:string, public done: boolean, public targetDate: Date, public username:string,){

  }
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit{
  
  todos: Todo[]=[];
 

  constructor(private todoService: TodoDataService){

  }
  ngOnInit(): void {
    this.retrieveTodos('Manisha');
    // throw new Error('Method not implemented.');
  }
   retrieveTodos(name: string){
     this.todoService.retrieveAllTodos(name).subscribe((todos)=>{
          console.log(todos);
          this.todos = todos;
     }, error=> new Error('Failed due to unknow reason'));
   }

}
