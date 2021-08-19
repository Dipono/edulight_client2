import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private _router:Router, config: NgbCarouselConfig) {
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
  }

  move(){
    console.log('move')
    this._router.navigate(['/selectrole'])
  }

}
