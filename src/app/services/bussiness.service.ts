import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  constructor(public http:HttpClient) { }
  private allPatientData:any;

  savePatientData(data:any){
    this.allPatientData=data;
    console.log(this.allPatientData,'from service');
  }

  getAllPatientData(){
    return this.allPatientData;
  }

  getPdf(): Observable<Blob> {
    let body=this.allPatientData;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://reportapi.onrender.com/wordfile/', body, { headers, responseType: 'blob' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

}
