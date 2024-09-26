import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../models/login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username:'',
    password:''
  };

  constructor (private userServ: UserService){}
  
loggedInUser!: Login;
// creating a custom event on this component
@Output() loginOrLogout: EventEmitter<any> = new EventEmitter();

  
// this is called by angular when the componenet initializes
  ngOnInit(): void {
// fetch 
    this.getLoggedInUser();
  }

 async getLoggedInUser(){
     this.loggedInUser = await this.userServ.checkLogin();
   }
 
async logIn(): Promise<any>{
  this.loggedInUser = await this.userServ.logIn(this.credentials);
  this.loginOrLogout.emit();
}
logOut(): void{
  sessionStorage.removeItem('Login-Auth');
  this.loggedInUser = null as any;
  this.loginOrLogout.emit();
}
}
