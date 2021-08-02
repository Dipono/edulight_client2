import { Component, OnInit } from '@angular/core';
//import { Relationship } from '../model/Relationship.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-next-of-keen',
  templateUrl: './next-of-keen.component.html',
  styleUrls: ['./next-of-keen.component.css']
})
export class NextOfKeenComponent implements OnInit {

  constructor(private _router:Router) { }

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
