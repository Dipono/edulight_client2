import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';



@Component({
  selector: 'app-mentor-educational-info',
  templateUrl: './mentor-educational-info.component.html',
  styleUrls: ['./mentor-educational-info.component.css']
})
export class MentorEducationalInfoComponent implements OnInit {
  mentor:any
  mentorEducation = {
    persType:'',
    qualification:'',
    institution:'',
    secQualification:'',
    secInstitution:'',
    studyLevel:'',
    award:'',
    organization:'',
    specificOrganization:'',
    workkExperience:'',
    profBody:''
  }

  constructor(private _router:Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentor = this._router.getCurrentNavigation().extras.state.values;
      }
    });
  }
  
  ngOnInit(): void {
  }
  errMessage:string
  
  mentorBackground(){

    if(this.mentorEducation.institution != '' && this.mentorEducation.persType != '' && this.mentorEducation.qualification != ''
    && this.mentorEducation.studyLevel != '' && this.mentorEducation.organization != ''){
      for(var items in this.mentor){
        this.mentorEducation[items] = this.mentor[items]
      }
      const getValues: NavigationExtras = {
        state: {
          values: this.mentorEducation
        }
      };
      console.log('array ', getValues)
  
      
      this._router.navigate(['/mentor-background-info'],getValues)
    }

    else{
      console.log('all fild with * must be filled')
      return this.errMessage="All fild with * must be filled"
    }
   

    
    
  }

  personal(){
    this._router.navigate(['/mentor-personal-info'])    
  }

}
