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
  welcomeMessage="";
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
    //console.log(this.dataService.executeHelloWorldService("Roshan").subscribe);
    this.dataService.executeHelloWorldService("Manisha").subscribe((test)=>{
          console.log(test.message); 
          this.welcomeMessage = test.message; 
    }, error => this.handleErrorResponse(error));
    console.log("last line of the function call being executed here.");
  }
  handleErrorResponse(error: Error){
    console.log(error.message);
   // console.log(error.error.message);
   this.welcomeMessage = error.name;

  }

}


