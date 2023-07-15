import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  registrationForm!:FormGroup;
  constructor(){

  }

  ngOnInit(): void {
    this.registrationForm= new FormGroup({
      'Fname':new FormControl('',[Validators.required]),
      'uhid':new FormControl('',[Validators.required]),
      'rNo':new FormControl('',[Validators.required]),
      'age':new FormControl('',[Validators.required]),
      'sex':new FormControl('',[Validators.required]),
      'mobileNo':new FormControl('',[Validators.required]),
      'director':new FormControl('',[Validators.required]),
    });
  }
  onClick(){
    console.log(this.registrationForm);
    
  }

}
