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

  searchMentor(myEmail){
    return this.http.get('https://edulight-server.herokuapp.com/existingMentorEmail/'+myEmail)
  }
  
 registerMentee(body: any){
    return this.http.post('https://edulight-server.herokuapp.com/registerMentee', body, {
      observe: 'body'
    });
  }
  
  // *************************   LOCALHOST  ***********   LOCALHOST   ***********   LOCALHOST    *************************//
  /*

  registerMentor(body: any){
    return this.http.post('http://localhost:4041/registerMentor', body, {
      observe: 'body'
    });
  }

  searchMentor(myEmail){
    return this.http.get('http://localhost:4041/existingMentorEmail/'+myEmail)
  }

  registerMentee(body: any){
    return this.http.post('http://localhost:4041/registerMentee', body, {
      observe: 'body'
    });
  }

  searchMentee(myId){
    return this.http.get('http://localhost:4041/existingMenteeId/'+myId)
  }
*/

}
