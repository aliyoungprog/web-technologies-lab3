import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'libraries/ui/src/lib/button';
import { CardModule } from 'libraries/ui/src/lib/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CardModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
