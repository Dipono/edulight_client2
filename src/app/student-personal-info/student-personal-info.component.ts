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
    dob:'',
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
  }

  constructor(private _router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0)    
  }

  changeId(myId){

  }
  getDateofBirth(idNO){
    console.log(idNO)
  }
   
  disDescribe:string
  errMessage:string
  incorrectDob:string
  moveToSchool(){
    var year = this.mentee.stud_id.substring(0,2)
    var month = this.mentee.stud_id.substring(2,4)
    var day = this.mentee.stud_id.substring(4,6)
    //var mydateofbirth = Dthis.mentee.dob)
    console.log(day,' ',month,' ',year)

    var getDay = this.mentee.dob.substring(8,10)
    var getYear = this.mentee.dob.substring(2,4)
    var getMonth = this.mentee.dob.substring(5,7)
    console.log(getDay,' ',getMonth,' ',getYear)

    var fromId = String(day+'-'+month+'-'+year)
    var fromDob = String(getDay+'-'+getMonth+'-'+getYear)

    
    
    /*console.log(new this.mentee.dob().getMonth())
    console.log(new this.mentee.dob().getFullYear())*/
    
    if(this.mentee.stud_id != '' && this.mentee.names != '' && this.mentee.streetNo != '' && this.mentee.surname != ''
     && this.mentee.phone_Number != '' && this.mentee.email != '' && this.mentee.town != '' && this.mentee.city != ''
     && this.mentee.code != '' && this.mentee.province != '' && this.mentee.disability != ''
    ){
      
      if(fromId == fromDob){
        this.incorrectDob = ''
        const getValues: NavigationExtras = {
          state: {
            values: this.mentee
          }
        };
       // console.log(getValues)
        if(this.mentee.disability =='yes'){
          if(this.mentee.disabilityDesc == ''){
            this.disDescribe = "please describe disability"
            this.errMessage=''  
          }
          else{
          this._router.navigate(['/student-school-info'], getValues) 
          this.disDescribe = ''
          this.errMessage=''            
          }
        } 
  
        else{
        this._router.navigate(['/student-school-info'], getValues) 
        this.disDescribe = ''     
        this.errMessage=''                
        }
      }
  
      else{
        return this.incorrectDob='Incorrect Date of Birth/ Does not match with your ID'
      }

      

    }

    else{
      console.log('all fild with * must be filled')
      this.errMessage="All fild with * must be filled"
      this.disDescribe = ''  
    }

    //console.log(this.mentee)
    //this._router.navigate(['/student-school-info'])
  }

}
