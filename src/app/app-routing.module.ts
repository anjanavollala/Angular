import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './components/claims/claims.component';
import { MyAssessmentComponent } from './components/my-assessment/my-assessment.component';
import { AssessmentDetailsComponent } from './components/assessment-details/assessment-details.component';
import { LoginComponent } from './components/login/login.component';
import { ConfidentialComponent } from './components/confidential/confidential.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'my-assessments', component: MyAssessmentComponent },
  { path: 'assessment-details', component: AssessmentDetailsComponent },
  { path: 'confidential', component: ConfidentialComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: '', component: MyAssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
