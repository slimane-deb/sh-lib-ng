import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { DailyDrillingComponent } from './components/daily-drilling/daily-drilling.component';
import {
  DxButtonModule,
  DxCheckBoxModule, DxDateBoxModule,
  DxFormModule,
  DxNumberBoxModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
  DxTagBoxModule,
  DxTextAreaModule,
  DxTextBoxModule, DxValidationGroupModule, DxValidatorModule
} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DailyDrillingComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    DxCheckBoxModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule, DxRadioGroupModule,
    DxTextBoxModule, DxDateBoxModule, DxTagBoxModule, DxNumberBoxModule, DxValidatorModule,
    DxValidationGroupModule, DxButtonModule, FormsModule
  ]
})
export class ReportModule { }
