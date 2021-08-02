import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-mentor-submit-info',
  templateUrl: './mentor-submit-info.component.html',
  styleUrls: ['./mentor-submit-info.component.css']
})
export class MentorSubmitInfoComponent implements OnInit {
  mentor:any
  constructor(private _router:Router, private route: ActivatedRoute, private register:RegisterService) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentor = this._router.getCurrentNavigation().extras.state.values;
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  successfully(){
    console.log('successfully', this.mentor)
    this.register.registerMentor(this.mentor)
    .subscribe(data=> {
      data = this.mentor;
      console.log('data are',data)
      this._router.navigate(['/mentor-successfully'])
      
    },
    error=>{
      console.log(error)
      
    })
  }

  background(){
    this._router.navigate(['/mentor-background-info'])
    
  }

}
