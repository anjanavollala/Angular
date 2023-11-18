import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { MyAssessmentComponent } from './components/my-assessment/my-assessment.component';
import { AssessmentDetailsComponent } from './components/assessment-details/assessment-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { StatusRendererComponent } from './components/helpers/status-renderer/status-renderer.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FileUploadComponent } from './components/helpers/file-upload/file-upload.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FooterComponent } from './components/helpers/footer/footer.component';
import { HeaderComponent } from './components/helpers/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatNativeDateModule } from '@angular/material/core';
import { ConfidentialComponent } from './components/confidential/confidential.component';
import { RatingComponent } from './components/helpers/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimsComponent,
    MyAssessmentComponent,
    AssessmentDetailsComponent,
    StatusRendererComponent,
    FileUploadComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ConfidentialComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCardModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
