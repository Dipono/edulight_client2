import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-mentor-personal-info',
  templateUrl: './mentor-personal-info.component.html',
  styleUrls: ['./mentor-personal-info.component.css']
})
export class MentorPersonalInfoComponent implements OnInit {

  //myForm: FormGroup;
  mentor = {
    fullName: '',
    surname: '',
    dob: '',
    reAddress: '',
    gender: '',
    cellNo: '',
    altCellNo: '',
    email: '',
    disability: '',
    disabilityInfo: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  }
  constructor(private _router: Router, private route: ActivatedRoute, 
    private checkEmailMentor: RegisterService, private flashMessage: FlashMessagesService) {


    /*this.myForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      reAddress: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      cellNo: new FormControl(null, Validators.required),
      altCellNO: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      disability: new FormControl(null, Validators.required),    
      disabilityInfo: new FormControl(null, Validators.required),     
      facebook: new FormControl(null, Validators.required),   
      twitter: new FormControl(null, Validators.required),  
      instagra: new FormControl(null, Validators.required),     
      linkedin: new FormControl(null, Validators.required),   
    })*/
  }

  ngOnInit(): void {
    localStorage.removeItem('mentor');
    window.scrollTo(0, 0);
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

  errMessage: string
  existEmail: string
  dobMessage: string
  careentDate: Date


  getYear() {
    this.dobMessage = ''
    let thisYear = new Date().getFullYear()

    if (thisYear - Number(this.mentor.dob.substring(0, 4)) >= 18) {
      
      this.dobMessage = ''
      return true
    }
    this.dobMessage = 'You must be 18 or older'
    return false

  }


  educational() {
    //this.registerMessage='';
    
    this.errMessage = '';
    this.existEmail = '';
    this.dobMessage = ''
    //let thisYear = new Date().getFullYear()

    if (this.getYear() === true) {
      this.checkEmailMentor.searchMentor(this.mentor.email)
        .subscribe(data => {
          return this.existEmail = "This Email Exist or Has Already Been Used"
        }, error => {

          if (this.mentor.surname != '' && this.mentor.fullName != '' && this.mentor.cellNo != ''
            && this.mentor.disability != '' && this.mentor.email != '' && this.mentor.gender != ''
            && this.mentor.dob != '' && this.mentor.reAddress != '') {

            const getValues: NavigationExtras = {
              state: {
                values: this.mentor
              }
            };
            console.log(getValues)
            if (this.mentor.disability == 'yes') {
              if (this.mentor.disabilityInfo == '') {

              }
              else {
                localStorage.setItem('mentor', JSON.stringify(this.mentor))
                
                this._router.navigate(['/mentor-educational-info'], getValues)
              }
            }

            else {
              localStorage.setItem('mentor', JSON.stringify(this.mentor))             
              
              this._router.navigate(['/mentor-educational-info'], getValues)
            }
          }

          else {
            console.log('all fild with * must be filled')
            return this.errMessage = "All fild with * must be filled"
          }
        })
    }

    else {
      console.log('you must be older than 18')
    }
  }

}
