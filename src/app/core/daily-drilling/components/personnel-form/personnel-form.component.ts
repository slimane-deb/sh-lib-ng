import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomFormComponent} from 'projects/custom-form/src/lib/custom-form.component';
import * as classInstance from 'src/app/formClass';
import {Person} from '../../../models/person';

@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.scss']
})
export class PersonnelFormComponent implements OnInit {


  title = 'testForm';
  classInst = classInstance;
  formClass = 'FormPersonnel';
  colNum = 2;
  dataSource: any[] = [
    {
      // id: '10GK5',
      company: 'AVA WAST MANAGEMENT',
      no: 3,
      hours: 1.00,
      names: 'First & Last'
  },
   {
      // id: '10GK6',
      company: 'AVA WAST MANAGEMENT',
      no: 3,
      hours: 1.00,
      names: 'First & Last'
  },
   {
      // id: '10GK7',
      company: 'AVA WAST MANAGEMENT',
      no: 3,
      hours: 1.00,
      names: 'First & Last'
  }

  ];
  fields: any;

  constructor() {
  }

  ngOnInit() {
    this.fields = Object.keys(this.dataSource[0]);
  }

}
