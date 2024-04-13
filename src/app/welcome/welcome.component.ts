import { Component, OnInit } from '@angular/core';
import {AppComponent}  from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome Message'
  name=""
  //string message = "Welcome message"
  //Activated Route
  constructor(private route: ActivatedRoute, private dataService: DataService){

  }
  ngOnInit(): void {
    this.message = "5";
    this.name=this.route.snapshot.params['name'];
  //  console.log(this.message);
    //console.log(this.route.snapshot.params['name']);  
  }
  getWelcomeMessage(){
    console.log("Get Welcome Message!!");
    this.dataService.executeHelloWorldService("Roshan");
    
  }

}


