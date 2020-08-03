import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyDrillingRoutingModule } from './daily-drilling-routing.module';
import {
  DxButtonModule,
  DxCheckBoxModule, DxDataGridModule, DxDateBoxModule,
  DxFormModule,
  DxNumberBoxModule, DxPopupModule,
  DxRadioGroupModule,
  DxSelectBoxModule, DxTabPanelModule,
  DxTagBoxModule,
  DxTextAreaModule,
  DxTextBoxModule, DxTreeViewModule, DxValidationGroupModule, DxValidatorModule
} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';
import { BitBhaMdComponent } from './components/bit-bha-md/bit-bha-md.component';
import { PersonnelFormComponent } from './components/personnel-form/personnel-form.component';
import {CustomFormModule} from 'projects/custom-form/src/lib';
import { DailyHeaderComponent } from './components/daily-header/daily-header.component';
import { DdrListComponent } from './components/ddr-list/ddr-list.component';
import { OpsSummaryComponent } from './components/ops-summary/ops-summary.component';
import {DailyReportAddComponent} from './components/daily-report-add/daily-report-add.component';
import {DailyDrillingNewComponent} from './components/daily-drilling-new/daily-drilling-new.component';
import { SurveyDataComponent } from './components/survey-data/survey-data.component';
import { DiagWellComponent } from './components/diag-well/diag-well.component';
import { DailyNotesComponent } from './components/daily-notes/daily-notes.component';


@NgModule({
  declarations: [DailyReportAddComponent, DailyDrillingNewComponent, BitBhaMdComponent, PersonnelFormComponent, DailyHeaderComponent, DdrListComponent, OpsSummaryComponent, SurveyDataComponent, DiagWellComponent, DailyNotesComponent],
  imports: [
    CommonModule,
    DailyDrillingRoutingModule,
    CustomFormModule,
    DxCheckBoxModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule, DxRadioGroupModule,
    DxTextBoxModule, DxDateBoxModule, DxTagBoxModule, DxNumberBoxModule, DxValidatorModule,
    DxValidationGroupModule, DxButtonModule, FormsModule, DxTabPanelModule, DxDataGridModule, DxTreeViewModule, DxPopupModule
  ],
  exports: [
    DiagWellComponent
  ]
})
export class DailyDrillingModule { }
