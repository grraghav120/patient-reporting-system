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
    
  }

  getAllPatientData(){
    return this.allPatientData;
  }

  sendEmail(formData:any){
    console.log(this.allPatientData,'from service Email'); 
    let body={'name':'ss'}
    this.http.post('http://localhost:3000/api/send-email', body).subscribe(
      response => {
        console.log('Email sent successfully:', response);
      },
      error => {
        console.error('Error sending email:', error);
      }
    );  
  }

}
