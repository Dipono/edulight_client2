import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css']
})
export class StudentPersonalInfoComponent implements OnInit {

  mentee={
    stud_id:'',
    names:'',
    surname:'',	
    gender:'',	
    phone_Number:'',
    alt_Phone_Number:'',	
    email:'',
    streetNo:'',	
    town:'',	
    city:'',
    code:'',	
    province:'',
    disability:'',
    disabilityDesc:'',
    medicalCondition:'',
    persType:''
  }

  constructor(private _router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0)    
    
  }

  moveToSchool(){
    console.log(this.mentee)
    this._router.navigate(['/student-school-info'])
  }

}
