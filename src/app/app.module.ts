import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
    MentorBackgroundInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'selectrole', component:RegisterRoleComponent},
      {path: 'student-personal-info', component:StudentPersonalInfoComponent},
      {path: 'student-school-info', component:StudentSchoolInfoComponent},
      {path: 'mentor-personal-info', component:MentorPersonalInfoComponent},
      {path: 'mentor-educational-info', component:MentorEducationalInfoComponent},
      {path: 'mentor-background-info', component:MentorBackgroundInfoComponent},
      {path: 'mentor-submit-info', component:MentorSubmitInfoComponent},
      {path: 'mentor-successfully', component:MentorSuccessfullyComponent}
      
      
    ]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
