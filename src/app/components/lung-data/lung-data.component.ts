import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lung-data',
  templateUrl: './lung-data.component.html',
  styleUrls: ['./lung-data.component.scss']
})
export class LungDataComponent implements OnInit{
  LungForm!:FormGroup;
  openFirst:boolean=false;
  openFirstOpacity: boolean=false;
  openFirstMasses:boolean=false;
  openFirstConsolidation:boolean=false;
  openFirstCavity:boolean=false;
  constructor(){}
  ngOnInit(): void {
    this.LungForm=new FormGroup({
      'infiltration':new FormControl('',[Validators.required]),
      'sideinfil':new FormControl('',[Validators.required]),
      'regioninfil':new FormControl('',[Validators.required]),
      'opacity':new FormControl('',[Validators.required]),
      'masses':new FormControl('',[Validators.required]),
      'consolidation':new FormControl('',[Validators.required]),
      'cavity':new FormControl('',[Validators.required]),
    });
  }

  onChangeInfiltration(event:any){
    if(event.value==='present') this.openFirst=true;
    else this.openFirst=false;
  }

  onChangeOpacity(event:any){
    if(event.value==='present') this.openFirstOpacity=true;
    else this.openFirstOpacity=false;
  }

  onChangeMasses(event:any){
    if(event.value==='present') this.openFirstMasses=true;
    else this.openFirstMasses=false;
  }
  onChangeCavity(event:any){
    if(event.value==='present') this.openFirstCavity=true;
    else this.openFirstCavity=false;
  }
  onChangeConsolidation(event:any){
    if(event.value==='present') this.openFirstConsolidation=true;
    else this.openFirstConsolidation=false;
  }


}
