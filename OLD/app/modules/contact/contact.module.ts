import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { ContactComponent } from './component/contact.component';
import {ContactService} from "../../services/contact.service";
// import {ContactRouting} from "./contact.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ContactRouting,
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
