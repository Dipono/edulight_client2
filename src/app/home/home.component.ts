import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private _router:Router, config: NgbCarouselConfig, 
              private flashMessage: FlashMessagesService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
    localStorage.removeItem('mentee');
    localStorage.removeItem('menteeEdu');
    localStorage.removeItem('menteeKin');
    localStorage.removeItem('mentor');
    localStorage.removeItem('mentorEducation');
    localStorage.removeItem('mentorBackground');
    
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
      this.flashMessage.show(this.registerMessage, {cssClass: 'alert-success', timeout:5000});
      localStorage.removeItem('registerMessage');
    }
  }

  menteeApplication(){
    this._router.navigate(['/student-personal-info'])
  }

  mentorApplication(){
    this._router.navigate(['/mentor-personal-info'])
  }

}
