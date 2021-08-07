import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-mentee-info',
  templateUrl: './mentee-info.component.html',
  styleUrls: ['./mentee-info.component.css']
})
export class MenteeInfoComponent implements OnInit {
  mentor:any
  constructor(private _router:Router, private route: ActivatedRoute, private register:RegisterService) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentor = this._router.getCurrentNavigation().extras.state.values;
      }
    });
   }

  ngOnInit(): void {
  }

  successfully(){
    this.register.registerMentee(this.mentor)
    .subscribe(success => {
      console.log('data are', success)
      this._router.navigate(['/mentor-successfully'])
      
    },
    error=>{
      console.log(error)
      
    })
  }

  background(){
    this._router.navigate(['/next-of-kin'])
    
  }

}
