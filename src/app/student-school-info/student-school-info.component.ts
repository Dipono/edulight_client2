import { Component, OnInit } from '@angular/core';
import { Subjects } from '../model/subjects.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-school-info',
  templateUrl: './student-school-info.component.html',
  styleUrls: ['./student-school-info.component.css']
})
export class StudentSchoolInfoComponent implements OnInit {

  subject: Subjects[] = [
    {id: 1, subjName: 'Mathematics', isChecked: false},
    {id: 2, subjName: 'Technical',isChecked: false},
    {id: 3, subjName: 'Mathematical Literecy',isChecked: false},
    {id: 4, subjName: 'Accounting',isChecked: false},
    {id: 5, subjName: 'Business Studies',isChecked: false},
    {id: 6, subjName: 'Economics',isChecked: false},
    {id: 7, subjName: 'Geography',isChecked: false},
    {id: 8, subjName: 'Life Sciences',isChecked: false},
    {id: 9, subjName: 'Physical Sciences',isChecked: false},
    {id: 10, subjName: 'Tourism',isChecked: false},
    {id: 11, subjName: 'other',isChecked: false}
    ];

    fir_Course_Name=''
    sec_Course_Name=''
    otherSubj:''
    fir_Tert_Name:''        
    sec_Tert_Name:''    
    selectModules:''
    school={
      subjName:[],
      grade:'',
      tert_Name:[],
      course_Name:[],
      award:''
      
    }
  constructor(private _router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0)        
  }

  selectSubject(){
    //console.log(this.subject)
    for (let k = 0; k < this.subject.length; k++){
      
      if(this.subject[k].isChecked == true){
        console.log(this.subject[k]);
        this.school.subjName[k] = this.subject[k].subjName
      }
    }
  }
  strAdded :string
  mysubject :string
  addSubject(){
    console.log(this.otherSubj)
    if(this.otherSubj == undefined){
      console.log('is undefined')
      this.otherSubj = ''
    }
    if(this.otherSubj !=''){
      this.school.subjName.push(this.otherSubj)
      console.log(this.school.subjName)
      this.otherSubj=''
      return this.strAdded="Subject added Successfully"
    }
    return this.strAdded='Cannot add empty field'
  }
  

  emergencyContact(){
    this.school.course_Name[0] = this.fir_Course_Name
    this.school.course_Name[1] = this.sec_Course_Name
    this.school.tert_Name[0] =  this.fir_Tert_Name       
    this.school.tert_Name[1] =  this.sec_Tert_Name
    
    console.log('results',this.school)
    this._router.navigate(['/next-of-kin'])
  }
  
  personalInfo(){
    this._router.navigate(['/student-personal-info'])
  }
}
