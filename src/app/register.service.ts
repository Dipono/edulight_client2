import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerMentor(body: any){
    return this.http.post('https://edulight-server.herokuapp.com/registerMentor', body, {
      observe: 'body'
    });
  }
/*
  
 registerMentee(body: any){
    return this.http.post('https://edulight-server.herokuapp.com/registerMentee', body, {
      observe: 'body'
    });
  }*/
  registerMentee(body: any){
    return this.http.post('http://localhost:4041/registerMentee', body, {
      observe: 'body'
    });
  }
}
