import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Módulos
import { PagesRoutingModule } from './pages/pages.routing'
import { AuthRoutingModule } from './auth/auth.routing'

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

const routs: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routs ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
