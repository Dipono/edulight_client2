import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mentor-educational-info',
  templateUrl: './mentor-educational-info.component.html',
  styleUrls: ['./mentor-educational-info.component.css']
})
export class MentorEducationalInfoComponent implements OnInit {
  mentor: any
  mentorEducation = {
    qualification: '',
    institution: '',
    secQualification: '',
    secInstitution: '',
    studyLevel: '',
    award: '',
    organization: '',
    specificOrganization: '',
    workkExperience: '',
    profBody: ''
  }

  constructor(private _router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentor = this._router.getCurrentNavigation().extras.state.values;
        //console.log('my values', this.mentor.email)
      }
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('mentorEducation');
    
    window.scrollTo(0, 0)
  }
  errMessage: string

  mentorBackground() {
    //console.log(this.mentor.email, 'email')
    /*if (this.mentor.email == undefined) {
      console.log('undefined email')
      this._router.navigate(['/mentor-personal-info'])      
    }

    else {*/
      //console.log(this.mentorEducation.studyLevel)
      if (this.mentorEducation.institution != '' && this.mentorEducation.qualification != ''
        && this.mentorEducation.studyLevel != '' && this.mentorEducation.organization != '') {
        /*for (var items in this.mentor) {
          this.mentorEducation[items] = this.mentor[items]
        }
        const getValues: NavigationExtras = {
          state: {
            values: this.mentorEducation
          }
        };
        console.log('array ', getValues)*/


        if (this.mentorEducation.organization == 'yes') {
          if (this.mentorEducation.specificOrganization == '') {

          }
          else {
            localStorage.setItem('mentorEducation', JSON.stringify(this.mentorEducation))
            //this._router.navigate(['/mentor-background-info'], getValues)
            this._router.navigate(['/mentor-background-info'])
          }
        }
        else {
          localStorage.setItem('mentorEducation', JSON.stringify(this.mentorEducation))
         // this._router.navigate(['/mentor-background-info'], getValues)
         this._router.navigate(['/mentor-background-info'])         
        }


      }

      else {
        console.log('all fild with * must be filled')
        return this.errMessage = "All fild with * must be filled"
      }

    //}

  }

  personal() {
    localStorage.removeItem('mentorEducation')
    this._router.navigate(['/mentor-personal-info'])
  }

}
