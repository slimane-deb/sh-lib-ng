import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DailyDrillingComponent} from './components/daily-drilling/daily-drilling.component';


const routes: Routes = [
  {
    path: 'new',
    component: DailyDrillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
