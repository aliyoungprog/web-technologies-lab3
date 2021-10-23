import { NgModule } from '@angular/core';
import { ButtonModule } from './button';
import { CardModule } from './card';
import { InputTextModule } from './input-text';

@NgModule({
  declarations: [],
  imports: [ButtonModule, CardModule, InputTextModule],
  exports: [ButtonModule, CardModule, InputTextModule],
})
export class UiModule {}
