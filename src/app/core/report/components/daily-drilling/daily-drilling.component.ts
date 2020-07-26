import {Component, OnInit, ViewChild} from '@angular/core';
import {FormField} from '../../../../ui/model/form-field';
import {DataService} from '../../../services/data.service';
import {Report} from '../../../models/report';
import {Well} from '../../../models/well';
import {WellService} from '../../../services/well.service';
import {DxFormComponent} from 'devextreme-angular';
import {Company} from '../../../models/company';
import {Project} from '../../../models/project';
import {Site} from '../../../models/site';

@Component({
  selector: 'app-daily-drilling',
  templateUrl: './daily-drilling.component.html',
  styleUrls: ['./daily-drilling.component.scss'],
  providers: [DataService, WellService]
})
export class DailyDrillingComponent implements OnInit {
  // @ViewChild(DxFormComponent) myform: DxFormComponent;
  colNumber = 1;
  width = 600;
  field: FormField = {
    label: 'This a Field',

  };
  msgErr = 'please fill this field';
  report: Report ;
  company: Company ;
  projects: Project[];
  selectedWell: Well;
  sites: Site [];
  wells: Well[];

  constructor(private dataService: DataService, private wellService: WellService) {
    this.colNumber = 2;
    this.company = dataService.getCompanies().find( x => x.id === 1);
    this.projects = this.dataService.getProjectsByComp(1);
    this.selectedWell = wellService.getByCompanyId(this.company ? this.company.id : 1);
    this.report = {
      number: 1,
      date: new Date().toDateString()
    };
  }

  ngOnInit() {

  }

  onSumit(data) {

  }

  setSites(event, sel) {
    console.log(sel);
    this.sites = this.projects.find(x => x.id === event.value).sites;
  }

  setWells(event) {
    console.log(event);
    this.wells = this.sites.find(x => x.id === event.value).wells;
  }
}
