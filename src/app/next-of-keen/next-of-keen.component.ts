import { Component, OnInit } from '@angular/core';
//import { Relationship } from '../model/Relationship.model'
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-next-of-keen',
  templateUrl: './next-of-keen.component.html',
  styleUrls: ['./next-of-keen.component.css']
})
export class NextOfKeenComponent implements OnInit {

  mentee:any
  constructor(private _router:Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.mentee = this._router.getCurrentNavigation().extras.state.values;
      }
    });
   }

  /*relationship:Relationship[] =[
    {id:1, name:'Mother'},
    {id:2, name:'Father'},
    {id:3, name:'Grandma'},
    {id:4, name:'Grandpa'},
    {id:5, name:'Sister'},
    {id:6, name:'Brother'},
    {id:7, name:'Uncle'},
    {id:8, name:'Aunt'},
    {id:9, name:'Cousin'},
    {id:10, name:'Family Friend'},
    {id:11, name:'Other'}
  ]*/

  relationship =[
    {id:1, name:'Mother'},
    {id:2, name:'Father'},
    {id:3, name:'Grandma'},
    {id:4, name:'Grandpa'},
    {id:5, name:'Sister'},
    {id:6, name:'Brother'},
    {id:7, name:'Uncle'},
    {id:8, name:'Aunt'},
    {id:9, name:'Cousin'},
    {id:10, name:'Family Friend'},
    {id:11, name:'Other'}
  ]

   nextOfKin={ 
     kinFullName:'',
     kinRelationType:'',
     kinPhoneNo:'',
     kinHouseNo:'',
     kinProvince:'',
     kinTown:'',
     kinCode:'',
     kinCity:'',
   }

  ngOnInit(): void {
    window.scrollTo(0,0);    
  }

  errMessage:string
  submitInfo(){
    console.log(this.nextOfKin.kinRelationType)
    if(this.nextOfKin.kinFullName != '' && this.nextOfKin.kinRelationType != '' && this.nextOfKin.kinPhoneNo != ''
       && this.nextOfKin.kinHouseNo != '' && this.nextOfKin.kinProvince != '' && this.nextOfKin.kinTown != ''
       && this.nextOfKin.kinCode != '' && this.nextOfKin.kinCity != ''){
        for(var items in this.mentee){
          this.nextOfKin[items] = this.mentee[items]
        }      
  
        const getValues: NavigationExtras = {
          state: {
            values: this.nextOfKin
          }
        };
        this._router.navigate(['/mentee-submit-info'],getValues)
        
       }

       else{
        console.log('all fild must be filled')
        console.log(this.nextOfKin)
        return this.errMessage="All fild must be filled"
       }
    console.log(this.nextOfKin)
  } 

  schoolInfo(){
    this._router.navigate(['/student-school-info'])
  }
  
}
