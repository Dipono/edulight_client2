import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-mentee-submit-info',
  templateUrl: './mentee-submit-info.component.html',
  styleUrls: ['./mentee-submit-info.component.css']
})
export class MenteeSubmitInfoComponent implements OnInit {

  constructor(private _router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0,0)    
  }

  emergency(){
    this._router.navigate(['/next-of-kin'])
  }

  successMessage:string
  successfully(){
    this.successMessage = "SuccessFully Registered"
    console.log(this.successMessage)
    this._router.navigate(['/'])    
  }
}
