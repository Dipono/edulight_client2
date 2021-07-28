import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-school-info',
  templateUrl: './student-school-info.component.html',
  styleUrls: ['./student-school-info.component.css']
})
export class StudentSchoolInfoComponent implements OnInit {

  mygrade=[8,9,10,11,12]
  constructor() { }

  ngOnInit(): void {
  }

}
