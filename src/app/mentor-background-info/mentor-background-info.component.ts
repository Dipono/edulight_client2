import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-mentor-background-info',
  templateUrl: './mentor-background-info.component.html',
  styleUrls: ['./mentor-background-info.component.css']
})
export class MentorBackgroundInfoComponent implements OnInit {

  backgrnd={
    criminalRec:'',
    mentor:'',
    workPupil:'',
    mentorSkills:'',
    menteeNo:'',
    mentoringReason:'',
  }
  mentor:any
  constructor(private _router:Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentor = this._router.getCurrentNavigation().extras.state.values;
        console.log('landing background',this.mentor)
      }
    });
  }

  ngOnInit(): void {
  }

  errMessage:string

  finalPage(){
    
    if(this.backgrnd.criminalRec != '' && this.backgrnd.mentor != '' && this.backgrnd.workPupil != '' &&
    this.backgrnd.menteeNo != '' && this.backgrnd.mentorSkills != '' && this.backgrnd.mentoringReason != ''){
      for(var items in this.mentor){
        this.backgrnd[items] = this.mentor[items]
      }
      console.log('after ',this.backgrnd)
      const getValues: NavigationExtras = {
        state: {
          values: this.backgrnd
        }
      };
      console.log('array ', getValues)
      
      this._router.navigate(['/mentor-submit-info'], getValues)
    }
    else{
      console.log('all fild must be filled')
      return this.errMessage="All fild must be filled"
    }
    
  }

  education(){
    this._router.navigate(['/mentor-educational-info'])    
  }

}
