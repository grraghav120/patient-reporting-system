import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  
  @ViewChild('adminForm') adminForm!:NgForm;

  constructor(){}
  ngOnInit(): void {
    
  }

  onClick(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value);
  }

}
