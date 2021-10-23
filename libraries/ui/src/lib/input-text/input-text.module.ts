import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { AppComponent } from 'applications/visitcard/src/app/app.component';

@NgModule({
  declarations: [InputTextComponent],
  imports: [CommonModule, MatInputModule, MatIconModule],
  exports: [InputTextComponent],
})

export class InputTextModule{

}
