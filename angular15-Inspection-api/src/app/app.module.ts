import{ HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionsComponent } from './inspection/show-inspections/show-inspections.component';
import { AddEditInspectionsComponent } from './inspection/add-edit-inspections/add-edit-inspections.component';
import { InspectionsApiService } from './inspections-api.service';
@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionsComponent,
    AddEditInspectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InspectionsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
