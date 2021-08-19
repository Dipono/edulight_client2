import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-mentor-submit-info',
  templateUrl: './mentor-submit-info.component.html',
  styleUrls: ['./mentor-submit-info.component.css']
})
export class MentorSubmitInfoComponent implements OnInit {
  mentor={}
  mentorApp={} 
  mentorEdu={}
  mentorBack={}
  constructor(private _router:Router, private route: ActivatedRoute, private register:RegisterService) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        //this.mentor = this._router.getCurrentNavigation().extras.state.values;
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  successfully(){
    /*console.log(JSON.parse(localStorage.getItem('mentor')))
    console.log(JSON.parse(localStorage.getItem('mentorEducation')))
    console.log(JSON.parse(localStorage.getItem('mentorBackground')))*/
    this.mentorApp = JSON.parse(localStorage.getItem('mentor'));
    this.mentorEdu = JSON.parse(localStorage.getItem('mentorEducation'));
    this.mentorBack = JSON.parse(localStorage.getItem('mentorBackground'));
    /*console.log(this.mentorApp)
    console.log(this.mentorEdu)
    console.log(this.mentorBack)*/

    for (var app in this.mentorApp) {
      this.mentor[app] = this.mentorApp[app]
    }
    for (var edu in this.mentorEdu) {
      this.mentor[edu] = this.mentorEdu[edu]
    }
    for (var back in this.mentorBack) {
      this.mentor[back] = this.mentorBack[back]
    }

    console.log(this.mentor)
      console.log('successfully', this.mentor)
      this.register.registerMentor(this.mentor)
      .subscribe(data=> {
        data = this.mentor;
        console.log('data are',data)
        localStorage.removeItem('mentor');
        localStorage.removeItem('mentorEducation');
        localStorage.removeItem('mentorBackground');
        
        
        this._router.navigate(['/mentor-successfully'])
        
      },
      error=>{
        console.log(error)
        
      })
    
    
  }

  background(){
    this._router.navigate(['/mentor-background-info'])
    localStorage.removeItem('mentorBackground')
    
  }

}
