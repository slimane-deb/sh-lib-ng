import { NgModule } from '@angular/core';
import { CustomFormComponent } from './custom-form.component';
import {
  DxCheckBoxModule,
  DxDateBoxModule,
  DxFormModule,
  DxNumberBoxModule,
  DxRadioGroupModule, DxSelectBoxModule,
  DxTagBoxModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxValidationGroupModule, DxValidatorModule
} from 'devextreme-angular';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [CustomFormComponent],
  imports: [
    CommonModule, HttpClientModule,
    DxCheckBoxModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule, DxRadioGroupModule, DxTextBoxModule, DxDateBoxModule,
    DxTagBoxModule, DxNumberBoxModule, DxValidatorModule, DxValidationGroupModule
  ],
  exports: [CustomFormComponent]
})
export class CustomFormModule { }
