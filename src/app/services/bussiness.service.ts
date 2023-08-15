import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  constructor(public http:HttpClient) { }
  private allPatientData:any;

  savePatientData(data:any){
    this.allPatientData=data;
    console.log(this.allPatientData,'from service'); 
    this.wordFileSaveApi();
  }

  getAllPatientData(){
    return this.allPatientData;
  }

  wordFileSaveApi(){
    let body=this.allPatientData;
    this.http.post('http://127.0.0.1:8000/wordfile/',body).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
