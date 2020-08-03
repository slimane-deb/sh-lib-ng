import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomFormComponent} from '../../../../../projects/custom-form/src/lib/custom-form.component';
import {ActionButton} from '../../../../../projects/custom-form/src/lib/formModel/action-button';
import notify from 'devextreme/ui/notify';
import {Utils} from '../../../common/utils';
import {DateUtils} from '../../../common/dateUtils';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {
  @ViewChild(CustomFormComponent) myForm: CustomFormComponent;

  classInst ;
  formClass ;
  colNum ;
  actionBtn: ActionButton[];
  constructor() { }

  ngOnInit() {
  }
  updatedButtonsAction(data: ActionButton[]) {
    this.actionBtn = data;
    notify('Form Saved');

  }
  sendForm(e) {
    const obj: any = Utils.mapFormDeco(this.myForm.generateDataToSend()) ;
    const dateCreation = DateUtils.format(new Date(), 'dd/MM/yyyy');
    const buttonText = e.component.option('text');
    notify('Form Saved');


  }

  cancelSendForm() {
    alert('Cancel sending the form');
  }
}
