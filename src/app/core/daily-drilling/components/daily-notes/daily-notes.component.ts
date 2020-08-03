import { Component, OnInit } from '@angular/core';
import * as classInstance from '../../../../formClass';
import {FormRemarks} from '../../../../formClass';
import {BaseFormComponent} from '../../../../shared/components/base-form/base-form.component';

@Component({
  selector: 'app-daily-notes',
  templateUrl: './daily-notes.component.html',
  styleUrls: ['./daily-notes.component.scss']
})
export class DailyNotesComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
    this.classInst = classInstance;
    this.formClass = FormRemarks.name;
  }

  ngOnInit() {
  }

}
