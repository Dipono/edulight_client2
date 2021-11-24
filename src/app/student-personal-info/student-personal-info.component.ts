import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RegisterService } from '../register.service';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css']
})
export class StudentPersonalInfoComponent implements OnInit {

  mentee = {
    stud_id: '',
    names: '',
    dob: '',
    surname: '',
    gender: '',
    phone_Number: '',
    alt_Phone_Number: '',
    email: '',
    streetNo: '',
    town: '',
    city: '',
    code: '',
    province: '',
    disability: '',
    disabilityDesc: '',
    medicalCondition: '',
  }

  constructor(private _router: Router, private checkIdMentee: RegisterService, 
              private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
    localStorage.removeItem('mentee');
    window.scrollTo(0, 0)
    this.notRegisterd();
  }
  
  registerMessage:string
  notRegisterd(){
    
    this.registerMessage = '';
    this.registerMessage = localStorage.getItem('registerMessage')
    console.log(this.registerMessage)
    if(this.registerMessage==null){

    }
    else{
      this.flashMessage.show(this.registerMessage, {cssClass: 'alert-danger', timeout:5000});
      localStorage.removeItem('registerMessage');
    }
  }

  validateSAID() {
    let saCitezen = this.mentee.stud_id.substring(10, 12)
    if (saCitezen == '08' && this.mentee.stud_id.length === 13) {
      return true
    }
    return false
  }

  dobMessage: string
  getYear() {
    this.dobMessage = ''
    let thisYear = new Date().getFullYear()

    if (thisYear - Number(this.mentee.dob.substring(0, 4)) >= 18) {
      console.log('good')
      this.dobMessage = ''
      return true
    }
    console.log('You must be 18 or older')
    this.dobMessage = 'You must be 18 or older'
    return false

  }


  existingStud: string

  validateDOBId() {
    this.existingStud = ''

    var year = this.mentee.stud_id.substring(0, 2)
    var month = this.mentee.stud_id.substring(2, 4)
    var day = this.mentee.stud_id.substring(4, 6)
    //console.log(day,' ',month,' ',year)

    var getDay = this.mentee.dob.substring(8, 10)
    var getYear = this.mentee.dob.substring(2, 4)
    var getMonth = this.mentee.dob.substring(5, 7)
    //console.log(getDay,' ',getMonth,' ',getYear)

    var fromId = String(day + '-' + month + '-' + year)
    var fromDob = String(getDay + '-' + getMonth + '-' + getYear)

    if (fromId == fromDob) {
      this.incorrectDob = ''
      return true
    }

    else {
      this.incorrectDob = 'Incorrect Date of Birth/ Does not match with your ID'
      return false
    }
  }

  disDescribe: string
  errMessage: string
  incorrectId: string
  incorrectDob: string

  moveToSchool() {
    console.log(this.validateSAID())
    console.log(this.validateDOBId())
    //console.log(this.getYear())

    this.disDescribe = '';
    this.errMessage = '';
    this.incorrectDob = '';
    this.incorrectId = ''
    if (this.validateSAID() == true) {
      if (this.validateDOBId() == true) {
        this.checkIdMentee.searchMentee(this.mentee.stud_id)
          .subscribe(data => {
            console.log('This Id Has Already Been Used')
            this.existingStud = 'This Id Has Already Been Used'
          }, error => {
            console.log('searching')
            if (this.mentee.stud_id != '' && this.mentee.names != '' && this.mentee.streetNo != '' && this.mentee.surname != ''
              && this.mentee.phone_Number != '' && this.mentee.email != '' && this.mentee.town != '' && this.mentee.city != ''
              && this.mentee.code != '' && this.mentee.province != '' && this.mentee.disability != ''
            ) {

              if (this.mentee.disability == 'yes') {
                if (this.mentee.disabilityDesc == '') {
                  this.disDescribe = "please describe disability"
                  this.errMessage = ''
                }
                else {
                  localStorage.setItem('mentee', JSON.stringify(this.mentee))

                  this._router.navigate(['/student-school-info'])
                }
              }

              else {
                localStorage.setItem('mentee', JSON.stringify(this.mentee))
                this._router.navigate(['/student-school-info'])
              }

            }
            else {
              console.log('all fild with * must be filled')
              this.errMessage = "All fild with * must be filled"
              this.disDescribe = ''
            }

          })
      }

      else {
        console.log('Incorrect Date of Birth/ Does not match with your ID')
      }

    }
    else {
      console.log('It must be SA ID')
      this.incorrectId = 'It must be SA ID'
    }


    /*if(this.mentee.stud_id != '' && this.mentee.names != '' && this.mentee.streetNo != '' && this.mentee.surname != ''
     && this.mentee.phone_Number != '' && this.mentee.email != '' && this.mentee.town != '' && this.mentee.city != ''
     && this.mentee.code != '' && this.mentee.province != '' && this.mentee.disability != ''
    ){
      
       // console.log(getValues)
        if(this.mentee.disability =='yes'){
          if(this.mentee.disabilityDesc == ''){
            this.disDescribe = "please describe disability"
            this.errMessage=''  
          }
          else{
          //this._router.navigate(['/student-school-info'], getValues) 
          localStorage.setItem('mentee', JSON.stringify(this.mentee))
          
          this._router.navigate(['/student-school-info']) 
          }
        } 
  
        else{
        //this._router.navigate(['/student-school-info'], getValues)
        localStorage.setItem('mentee', JSON.stringify(this.mentee))        
        this._router.navigate(['/student-school-info'])         
        }
      }
  
      else{
        return this.incorrectDob=''
      }

      

    }

    else{
      console.log('all fild with * must be filled')
      this.errMessage="All fild with * must be filled"
      this.disDescribe = ''  
    }*/

    //console.log(this.mentee)
    //this._router.navigate(['/student-school-info'])
  }

}
