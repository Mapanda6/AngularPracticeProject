import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(public id: number, public description:string, public done: boolean, public targetDate: Date){

  }
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit{
  
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert in Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date()),
  ];
  todo = {
    id: 1,
    description: 'Learn to Dance'
  };

  constructor(){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
