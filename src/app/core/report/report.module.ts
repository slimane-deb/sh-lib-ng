import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { DailyDrillingComponent } from './components/daily-drilling/daily-drilling.component';
import {
    DxButtonModule,
    DxCheckBoxModule, DxDataGridModule, DxDateBoxModule,
    DxFormModule,
    DxNumberBoxModule,
    DxRadioGroupModule,
    DxSelectBoxModule, DxTabPanelModule,
    DxTagBoxModule,
    DxTextAreaModule,
    DxTextBoxModule, DxValidationGroupModule, DxValidatorModule
} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';
import { DailyReportNewComponent } from './components/daily-report-new/daily-report-new.component';
import { BitBhaMdComponent } from './components/bit-bha-md/bit-bha-md.component';
import { PersonnelFormComponent } from './components/personnel-form/personnel-form.component';
import {CustomFormModule} from 'projects/custom-form/src/lib';
import { DailyHeaderComponent } from './components/daily-header/daily-header.component';


@NgModule({
  declarations: [DailyDrillingComponent, DailyReportNewComponent, BitBhaMdComponent, PersonnelFormComponent, DailyHeaderComponent],
    imports: [
        CommonModule,
        ReportRoutingModule,
        CustomFormModule,
        DxCheckBoxModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule, DxRadioGroupModule,
        DxTextBoxModule, DxDateBoxModule, DxTagBoxModule, DxNumberBoxModule, DxValidatorModule,
        DxValidationGroupModule, DxButtonModule, FormsModule, DxTabPanelModule, DxDataGridModule
    ]
})
export class ReportModule { }
