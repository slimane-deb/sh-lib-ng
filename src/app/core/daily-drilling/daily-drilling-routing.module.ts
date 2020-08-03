import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DailyDrillingNewComponent} from './components/daily-drilling-new/daily-drilling-new.component';
import {DailyReportAddComponent} from './components/daily-report-add/daily-report-add.component';
import {BitBhaMdComponent} from './components/bit-bha-md/bit-bha-md.component';
import {PersonnelFormComponent} from './components/personnel-form/personnel-form.component';
import {DailyHeaderComponent} from './components/daily-header/daily-header.component';
import {DdrListComponent} from './components/ddr-list/ddr-list.component';
import {OpsSummaryComponent} from './components/ops-summary/ops-summary.component';
import {SurveyDataComponent} from './components/survey-data/survey-data.component';
import {DailyNotesComponent} from './components/daily-notes/daily-notes.component';


const routes: Routes = [
  {
    path: 'new',
    component: DailyDrillingNewComponent
  },
  {
    path: 'new-1',
    component: DailyReportAddComponent
  }
,
  {
    path: 'bit-bha-mud',
    component: BitBhaMdComponent
  },
  {
    path: 'employee-names',
    component: PersonnelFormComponent
  },
  {
    path: 'header',
    component: DailyHeaderComponent
  },
  {
    path: 'list',
    component: DdrListComponent
  },
  {
    path: 'ops-summary',
    component: OpsSummaryComponent
  },
  {
    path: 'survey-data',
    component: SurveyDataComponent
  },
  {
    path: 'notes',
    component: DailyNotesComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyDrillingRoutingModule { }
