import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TermsconditionComponent } from 'src/app/shared/termscondition/termscondition.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm!:NgForm
  termsCondition:boolean=false;
  constructor(public route:Router,public dialog: MatDialog){}
  ngOnInit(): void {
    this.termsCondition=false;
  }

  onClick(form:NgForm){
    if(!this.termsCondition || form.invalid) return;
    console.log(form.value);
    //data save table main  and navigate home
    this.onLogin();
  }

  onLogin(){
    this.route.navigate(['/login']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TermsconditionComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result==='accept'){
        this.termsCondition=true;
      }
      else this.termsCondition=false;
    });
  }

}
