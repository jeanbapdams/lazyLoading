import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImlazyComponent } from './imlazy/imlazy.component';

const routes: Routes = [
/*   { path: 'load-me', component: LazyParentComponent } */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImlazyComponent]
})
export class LazyModule { }
