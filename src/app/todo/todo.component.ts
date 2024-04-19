import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = 0;
  todo!: Todo;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.todo = new Todo(this.id, '', false, new Date(), '');
    if(this.id !== -1){
    this.todoService.retrieveTodo(this.id, "Manisha").subscribe(data =>{
      console.log(data.username);
      this.todo = data;
    });
  }
  }

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  saveTodo(todo: Todo){
    console.log("Save todo..");
    if(this.id === -1){
       // create todo
       this.todoService.createTodos('Durai23', this.id, this.todo).subscribe(data =>{
        this.todo = data;
        this.router.navigate(['todos']);
 }); 
    }else{
    this.todoService.updateTodos('Durai23', this.id, this.todo).subscribe(data =>{
          this.todo = data;
          this.router.navigate(['todos']);
   }); 
  }
}

}
