import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplyDetailComponent} from './apply-detail.component';
import {AuthGuard} from '../../guard/auth-guard';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: ApplyDetailComponent, canActivate: [AuthGuard], data: { animation: 'isRight' }}
];

@NgModule({
  declarations: [ApplyDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class ApplyModule { }

