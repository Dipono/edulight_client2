import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-mentee-submit-info',
  templateUrl: './mentee-submit-info.component.html',
  styleUrls: ['./mentee-submit-info.component.css']
})
export class MenteeSubmitInfoComponent implements OnInit {

  mentee:any
  constructor(private _router:Router, private route: ActivatedRoute, private register:RegisterService) { 
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentee = this._router.getCurrentNavigation().extras.state.values;
      }
    });
  }
 
  ngOnInit(): void {
    window.scrollTo(0,0)    
  }

  emergency(){
    this._router.navigate(['/next-of-kin'])
  }

  successMessage:string
  successfully(){
    this.register.registerMentee(this.mentee)
    .subscribe(data=> {
      data = this.mentee;
      console.log('data are',data)
      this._router.navigate(['/'])
      
    },
    error=>{
      console.log(error)
      
    })



   /* this.register.registerMentee(this.mentee).subscribe(data=> {console.log(data) 
    this._router.navigate(['/'])      
    })    */
    //this.mentee.stud_id = 145632987526
    //if(this.mentee.stud_id != '' && this.mentee.stud_id != undefined){
      /*this.register.registerMentee(this.mentee)
      .subscribe(data=>{
        console.log(data)
      data = this.mentee;
      console.log('data are',data)
      this._router.navigate(['/'])
      },
      error=>{
        console.log('some error')   
        console.log(error)      
           
        
      }) */
    //}
    /*else{
      console.log('Did not register successfully, try to register again')  
      this._router.navigate(['/student-personal-info'])
          
    }*/
    
  }
}
