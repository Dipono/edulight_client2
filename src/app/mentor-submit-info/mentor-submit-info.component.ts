import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 
import { RegisterService } from '../register.service';
import { FlashMessagesService } from 'flash-messages-angular'

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
  constructor(private _router:Router, private route: ActivatedRoute, 
    private register:RegisterService, private flashMessage: FlashMessagesService) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        //this.mentor = this._router.getCurrentNavigation().extras.state.values;
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  registerMessage:string

  successfully(){
    this.registerMessage=''
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
        localStorage.removeItem('mentor');
        localStorage.removeItem('mentorEducation');
        localStorage.removeItem('mentorBackground');
        //this.registerMessage='You Are Successfully Registered'
        //this.flashMessage.show(this.registerMessage, {cssClass: 'alert-success', timeout:2000});
        
        this._router.navigate(['/mentor-successfully'])
        
      },
      error=>{
        localStorage.removeItem('mentor');
        localStorage.removeItem('mentorEducation');
        localStorage.removeItem('mentorBackground');
        this.registerMessage='You Are Not Successfully Registered, Please Register again';
        localStorage.setItem('registerMessage', this.registerMessage)
        
        this._router.navigate(['/mentor-personal-info'])
        
      })
    
    
  }

  background(){
    this._router.navigate(['/mentor-background-info'])
    localStorage.removeItem('mentorBackground')
    
  }

}
