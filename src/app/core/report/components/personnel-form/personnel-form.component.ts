import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomFormComponent} from 'projects/custom-form/src/lib/custom-form.component';
import * as classInstance from 'src/app/formClass/libClasses';
import {DrillBha} from '../../../models/drill-bha';

@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.scss']
})
export class PersonnelFormComponent implements OnInit {

  @ViewChild(CustomFormComponent) dynamicForm: CustomFormComponent;

  title = 'testForm';
  classInst = classInstance;
  formClass = 'FormPersonnel';
  colNum = 2;
  dataSource: DrillBha[] = [{
    od: 5.5,
    toolType: 'HW',
    jtsNumber: 5,
    length: 11.2
  }
  ];

  constructor() {
  }

  clickSend() {
    console.log(this.dynamicForm.generateDataToSend());
  }
  ngOnInit() {
  }

}
