import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimezoneSelectorComponent } from './timezone-selector/timezone-selector.component';
import { TimebotComponent } from './timebot/timebot.component';

@NgModule({
  declarations: [
    AppComponent,
    TimezoneSelectorComponent,
    TimebotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
