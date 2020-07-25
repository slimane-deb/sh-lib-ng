import { Component, OnInit } from '@angular/core';
import {FormField} from '../../../../ui/model/form-field';

@Component({
  selector: 'app-daily-drilling',
  templateUrl: './daily-drilling.component.html',
  styleUrls: ['./daily-drilling.component.scss']
})
export class DailyDrillingComponent implements OnInit {

  colNumber = 3;
  width = 600;
  field: FormField = {
    label: 'This a Field',

  };
  msgErr = 'please fill this field';

  constructor() { }

  ngOnInit() {
  }

}
