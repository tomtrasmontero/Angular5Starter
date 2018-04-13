import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from  './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent2 } from './Alert/warningAlert.component';
import { WarningAlertComponent } from './Alert/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Alert/success-alert/success-alert.component';
import { Excercise2 } from './Excercise2/Excercise2.component';
import { Excercise3 } from './Excercise3/Excercise3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    WarningAlertComponent2,
    Excercise2,
    Excercise3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
