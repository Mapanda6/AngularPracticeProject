import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { ActivatedRoute } from '@angular/router';

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
    this.todo = new Todo(1, '', false, new Date(), '');
    /* this.todoService.updateTodos('Manisha', this.id, this.todo ).subscribe((update: Todo)=>{
      this.todo = update;

    }); */
  }

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute
  ){}

  saveTodo(){
    console.log("Save todo..");
    
   /* this.todoService.updateTodos('Manisha1', this.id, this.todo).subscribe({

   }); */
  }

}
