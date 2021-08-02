import { Component, OnInit } from '@angular/core';
import { Relationship } from '../model/Relationship.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-next-of-keen',
  templateUrl: './next-of-keen.component.html',
  styleUrls: ['./next-of-keen.component.css']
})
export class NextOfKeenComponent implements OnInit {

  constructor(private _router:Router) { }

  relationship:Relationship[] =[
    {name:'Mother'},
    {name:'Father'},
    {name:'Grandma'},
    {name:'Grandpa'},
    {name:'Sister'},
    {name:'Brother'},
    {name:'Uncle'},
    {name:'Aunt'},
    {name:'Cousin'},
    {name:'Family Friend'},
    {name:'Other'}
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

  submitInfo(){
    console.log(this.nextOfKin)
    this._router.navigate(['/mentee-submit-info'])
  }

  schoolInfo(){
    this._router.navigate(['/student-school-info'])
  }
  
}
