import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ops-summary',
  templateUrl: './ops-summary.component.html',
  styleUrls: ['./ops-summary.component.scss']
})
export class OpsSummaryComponent implements OnInit {

  dataSource: any[] = [{
    fromTo: '',
    hrs: '',
    phase: '',
    code: '',
    sub: '',
    description: '',
    fromTo2: '',
    npt: '',
    nptDetail: '',
    nptCo: '',
    opCo: '',
    bill: ''
  }
  ];
  fields;
  constructor() { }

  ngOnInit() {
    this.fields = Object.keys(this.dataSource[0]);
  }

}
