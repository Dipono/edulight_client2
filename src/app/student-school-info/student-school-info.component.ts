import { Component, OnInit } from '@angular/core';
import { Subjects } from '../model/subjects.model'

@Component({
  selector: 'app-student-school-info',
  templateUrl: './student-school-info.component.html',
  styleUrls: ['./student-school-info.component.css']
})
export class StudentSchoolInfoComponent implements OnInit {

  subject: Subjects[] = [
    {id: 1, subjName: 'Mathematics'},
    {id: 2, subjName: 'Technical'},
    {id: 3, subjName: 'Mathematical Literecy'},
    {id: 4, subjName: 'Accounting'},
    {id: 5, subjName: 'Business Studies'},
    {id: 6, subjName: 'Economics'},
    {id: 7, subjName: 'Geography'},
    {id: 8, subjName: 'Life Sciences'},
    {id: 9, subjName: 'Physical Sciences'},
    {id: 10, subjName: 'Tourism'},
    {id: 11, subjName: 'other'}
    
    
     
  ];
  grades:[10,11]
  constructor() { }

  ngOnInit(): void {
  }

}
