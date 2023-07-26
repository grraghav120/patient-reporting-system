import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  constructor() { }
  private allPatientData:any;

  savePatientData(data:any){
    this.allPatientData=data;
    console.log(this.allPatientData,'from service'); 
  }

  getAllPatientData(){
    return this.allPatientData;
  }

}
