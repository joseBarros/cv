/*
/!**
 * Created by jbarros on 21-11-2016.
 *!/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./component/contact.component";

const routes: Routes = [
  {path: '', component: ContactComponent},
];

export const ContactRouting: ModuleWithProviders = RouterModule.forChild(routes);
*/
