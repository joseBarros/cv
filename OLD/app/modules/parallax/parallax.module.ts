import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './component/parallax.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParallaxComponent],
  exports: [ParallaxComponent]
})
export class ParallaxModule { }
