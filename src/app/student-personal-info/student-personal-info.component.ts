import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css']
})
export class StudentPersonalInfoComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  moveToSchool(){
    this._router.navigate(['/student-school-info'])
  }

}
