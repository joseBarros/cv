import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import {HomeRouting} from "./home.routing";
import {ParallaxModule} from "../parallax/parallax.module";
import {ContactModule} from "../contact/contact.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    ParallaxModule,
    ContactModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
