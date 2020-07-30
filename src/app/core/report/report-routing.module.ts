import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DailyDrillingComponent} from './components/daily-drilling/daily-drilling.component';
import {DailyReportNewComponent} from './components/daily-report-new/daily-report-new.component';
import {BitBhaMdComponent} from './components/bit-bha-md/bit-bha-md.component';
import {PersonnelFormComponent} from './components/personnel-form/personnel-form.component';


const routes: Routes = [
  {
    path: 'new',
    component: DailyDrillingComponent
  },
  {
    path: 'new-1',
    component: DailyReportNewComponent
  }
,
  {
    path: 'bit-bha-mud',
    component: BitBhaMdComponent
  },
  {
    path: 'employee-names',
    component: PersonnelFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
