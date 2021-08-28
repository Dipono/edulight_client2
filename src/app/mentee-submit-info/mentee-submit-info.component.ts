import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-mentee-submit-info',
  templateUrl: './mentee-submit-info.component.html',
  styleUrls: ['./mentee-submit-info.component.css']
})
export class MenteeSubmitInfoComponent implements OnInit {

  mentee = {}
  menteeApp = {}
  menteeEdu = {}
  menteeKin = {}


  constructor(private _router: Router, private route: ActivatedRoute, private register: RegisterService) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        //this.mentee = this._router.getCurrentNavigation().extras.state.values;
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  emergency() {
    localStorage.removeItem('menteeKin')

    this._router.navigate(['/next-of-kin'])
  }

  registerMessage: string
  successfully() {

    this.menteeApp = JSON.parse(localStorage.getItem('mentee'));
    this.menteeEdu = JSON.parse(localStorage.getItem('menteeEdu'));
    this.menteeKin = JSON.parse(localStorage.getItem('menteeKin'));

    for (var app in this.menteeApp) {
      this.mentee[app] = this.menteeApp[app]
    }

    for (var edu in this.menteeEdu) {
      this.mentee[edu] = this.menteeEdu[edu]
    }

    for (var kin in this.menteeKin) {
      this.mentee[kin] = this.menteeKin[kin]
    }

    console.log(this.mentee)

    this.register.registerMentee(this.mentee)
      .subscribe(data => {
        data = this.mentee;
        localStorage.removeItem('mentee');
        localStorage.removeItem('menteeEdu');
        localStorage.removeItem('menteeKin');
        this.registerMessage='You Are Successfully Registered';
        localStorage.setItem('registerMessage', this.registerMessage)
        this._router.navigate(['/'])

      },
        error => {
          console.log(error)
          this.registerMessage='You Are Not Successfully Registered, Please Register again';
          localStorage.setItem('registerMessage', this.registerMessage)
          this._router.navigate(['/student-personal-info'])

        })

  }
}
