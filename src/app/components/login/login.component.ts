import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userType:any='user';
  remeberMe:boolean=false;
  @ViewChild('loginForm') loginForm!:NgForm
  constructor(public route:Router){}
  ngOnInit(): void {
    
  }
  onRadioChange(event:any){
    // console.log(this.userType);
  }
  onUserLogin(form:NgForm){
    if(form.invalid) return;
    console.log('userlogin',form.value);
    
  }
  onRegister(){
    this.route.navigate(['register']);
  }
}
