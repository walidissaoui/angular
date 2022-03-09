import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlert } from './WarningAlert/warningAlert.component';
import { SuccessAlert } from './SuccessAlert/successAlert.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlert,
    DangerAlertComponent,
    InfoAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
