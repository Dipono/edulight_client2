import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-mentor-personal-info',
  templateUrl: './mentor-personal-info.component.html',
  styleUrls: ['./mentor-personal-info.component.css']
})
export class MentorPersonalInfoComponent implements OnInit {

  //myForm: FormGroup;
  mentor= {
    fullName:'',
    surname:'',
    dob:'',
    reAddress:'',
    gender:'',
    cellNo:'',
    altCellNo:'',
    email:'',
    disability:'',
    disabilityInfo:'',
    facebook:'',
    twitter:'',
    instagram:'',
    linkedin:''
  }
  constructor(private _router:Router, private route: ActivatedRoute) {


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

  /* mentor2 ={
     id: 123456
   }*/


  ngOnInit(): void {
  }


  errMessage:string
  
  educational(){
    /*for(var items in this.mentor){
      //console.log(this.mentor[k])
      console.log(items,' ',this.mentor[items])
      this.mentor2[items] = this.mentor[items];
      
    }*/
    console.log(this.mentor.disability)

    if(this.mentor.surname != '' && this.mentor.fullName != '' && this.mentor.cellNo != ''
      && this.mentor.disability != '' && this.mentor.email != '' && this.mentor.gender != ''
      && this.mentor.dob != '' && this.mentor.reAddress != ''){
        const getValues: NavigationExtras = {
          state: {
            values: this.mentor
          }
        };
        console.log(getValues)
        if(this.mentor.disability =='yes'){
          if(this.mentor.disabilityInfo == ''){
            
          }
          else{
          this._router.navigate(['/mentor-educational-info'], getValues)            
          }
        }

        else{
        this._router.navigate(['/mentor-educational-info'], getValues)                      
        }
        
        
        
    }

    else{
      console.log('all fild with * must be filled')
      return this.errMessage="All fild with * must be filled"
    }

  }

}
