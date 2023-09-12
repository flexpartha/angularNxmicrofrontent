import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomcolorComponent } from './containers/randomcolor/randomcolor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RandomcolorComponent],
  exports:[
    RandomcolorComponent
  ]
})
export class RandombackgroundModule {}
