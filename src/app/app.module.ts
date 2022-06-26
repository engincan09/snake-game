import { ScoreManager } from './../service/score-manager.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularEmojisModule } from 'angular-emojis';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEmojisModule
  ],
  providers: [ScoreManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
