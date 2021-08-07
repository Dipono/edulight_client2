import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
//import { MatCarouseModule } from '@angular/platform-browser/animations'

import { RegisterService } from './register.service';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterRoleComponent } from './register-role/register-role.component';
import { StudentPersonalInfoComponent } from './student-personal-info/student-personal-info.component';
import { StudentSchoolInfoComponent } from './student-school-info/student-school-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentorPersonalInfoComponent } from './mentor-personal-info/mentor-personal-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentorEducationalInfoComponent } from './mentor-educational-info/mentor-educational-info.component';
import { MentorSubmitInfoComponent } from './mentor-submit-info/mentor-submit-info.component';
import { MentorSuccessfullyComponent } from './mentor-successfully/mentor-successfully.component';
import { MentorBackgroundInfoComponent } from './mentor-background-info/mentor-background-info.component';
import { NextOfKeenComponent } from './next-of-keen/next-of-keen.component';
import { MenteeSubmitInfoComponent } from './mentee-submit-info/mentee-submit-info.component';
import { MenteeInfoComponent } from './mentee-info/mentee-info.component';
//const routes:Routes
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterRoleComponent,
    StudentPersonalInfoComponent,
    StudentSchoolInfoComponent,
    MentorPersonalInfoComponent,
    MentorEducationalInfoComponent,
    MentorSubmitInfoComponent,
    MentorSuccessfullyComponent,
    MentorBackgroundInfoComponent,
    NextOfKeenComponent,
    MenteeSubmitInfoComponent,
    MenteeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //routes,{scrollPositionRestoration: 'enable'},
      {path: '', component:HomeComponent},
      {path: 'selectrole', component:RegisterRoleComponent},
      {path: 'student-personal-info', component:StudentPersonalInfoComponent},
      {path: 'student-school-info', component:StudentSchoolInfoComponent},
      {path: 'mentor-personal-info', component:MentorPersonalInfoComponent},
      {path: 'mentor-educational-info', component:MentorEducationalInfoComponent},
      {path: 'mentor-background-info', component:MentorBackgroundInfoComponent},
      {path: 'mentor-submit-info', component:MentorSubmitInfoComponent},
      {path: 'mentor-successfully', component:MentorSuccessfullyComponent},
      {path: 'next-of-kin', component:NextOfKeenComponent},//
      {path: 'mentee-submit-info', component:MenteeSubmitInfoComponent},
      {path: 'mentee-info', component:MenteeInfoComponent}
      

      
    ]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
