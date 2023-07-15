import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bilateral',
  templateUrl: './bilateral.component.html',
  styleUrls: ['./bilateral.component.scss']
})
export class BilateralComponent implements OnInit{
  hilumForm!:FormGroup
  openFirstHilum:boolean=false;
  openFirstTrachea:boolean=false;
  constructor(){}

  ngOnInit(): void {
    this.hilumForm=new FormGroup({
      'hilum':new FormControl('',[Validators.required]),
      'trachea':new FormControl('',[Validators.required]),
    })
  }

  onChangeHilum(event:any){
    if(event.value==='present') this.openFirstHilum=true;
    else this.openFirstHilum=false;
  }
  onChangeTrachea(event:any){
    if(event.value==='shift') this.openFirstTrachea=true;
    else this.openFirstTrachea=false;
  }
}
