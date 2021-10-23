import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'libraries/ui/src/lib/button';
import { CardModule } from 'libraries/ui/src/lib/card';
import { InputTextModule } from 'libraries/ui/src/lib/input-text';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CardModule, ButtonModule, InputTextModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
