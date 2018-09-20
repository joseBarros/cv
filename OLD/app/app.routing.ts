/**
 * Created by jbarros on 21-11-2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule' }
];
export const AppRuting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
