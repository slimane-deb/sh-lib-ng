import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-survey-data',
  templateUrl: './survey-data.component.html',
  styleUrls: ['./survey-data.component.scss']
})
export class SurveyDataComponent implements OnInit {
  dataSource: any[] = [{
    md: '',
    inc: '',
    azi: '',
    tvd: '',
    NSmin: '',
    EWmin: '',
    vs: '',
    dls: '',
  }
  ];
  fields;

  constructor() {
  }

  ngOnInit() {
    this.fields = Object.keys(this.dataSource[0]);
  }

}
