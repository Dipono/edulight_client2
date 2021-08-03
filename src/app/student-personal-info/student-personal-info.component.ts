import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

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
  disDescribe:string
  errMessage:string
  moveToSchool(){
    if(this.mentee.stud_id != '' && this.mentee.persType != '' && this.mentee.names != '' && this.mentee.streetNo != ''
    && this.mentee.surname != '' && this.mentee.phone_Number != '' && this.mentee.email != '' && this.mentee.town != ''
    && this.mentee.city != '' && this.mentee.code != '' && this.mentee.province != '' && this.mentee.disability != ''
    && this.mentee.persType != ''){

      const getValues: NavigationExtras = {
        state: {
          values: this.mentee
        }
      };
      console.log(getValues)
      if(this.mentee.disability =='yes'){
        if(this.mentee.disabilityDesc == ''){
          return this.disDescribe = "please describe disability"
        }
        else{
        this._router.navigate(['/student-school-info'], getValues)            
        }
      }

      else{
      this._router.navigate(['/student-school-info'], getValues)                      
      }

    }

    else{
      console.log('all fild with * must be filled')
      return this.errMessage="All fild with * must be filled"
    }

    //console.log(this.mentee)
    //this._router.navigate(['/student-school-info'])
  }

}
