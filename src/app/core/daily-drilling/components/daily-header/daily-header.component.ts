import {Component, OnInit} from '@angular/core';
import * as classInstance from '../../../../formClass';
import {FormReportHeader} from '../../../../formClass';

import {BaseFormComponent} from '../../../../shared/components/base-form/base-form.component';

@Component({
  selector: 'app-daily-header',
  templateUrl: './daily-header.component.html',
  styleUrls: ['./daily-header.component.scss']
})
export class DailyHeaderComponent extends BaseFormComponent implements OnInit {

  constructor() {
    super();
    this.classInst = classInstance;
    this.formClass = FormReportHeader.name;
    this.colNum = FormReportHeader.sectionsNum;
  }

  ngOnInit() {

  }

}
