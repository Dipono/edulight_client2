import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 



@Component({
  selector: 'app-mentor-submit-info',
  templateUrl: './mentor-submit-info.component.html',
  styleUrls: ['./mentor-submit-info.component.css']
})
export class MentorSubmitInfoComponent implements OnInit {
  mentor:any
  constructor(private _router:Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentor = this._router.getCurrentNavigation().extras.state.values;
        console.log('Successfully Here',this.mentor)
      }
    });
  }

  ngOnInit(): void {
  }

  successfully(){
    console.log('Submitted Successfully................')
    this._router.navigate(['/mentor-successfully'])
  }

  background(){
    this._router.navigate(['/mentor-background-info'])
    
  }

}
