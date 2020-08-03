import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {Report} from '../../../models/report';
import {Well} from '../../../models/well';
import {WellService} from '../../../services/well.service';
import {Company} from '../../../models/company';
import {Site} from '../../../models/site';

@Component({
  selector: 'app-daily-drilling-new',
  templateUrl: './daily-drilling-new.component.html',
  styleUrls: ['./daily-drilling-new.component.scss'],
  providers: [DataService, WellService]
})
export class DailyDrillingNewComponent implements OnInit {
  // @ViewChild(DxFormComponent) myform: DxFormComponent;
  colNumber = 1;
  width = 600;
  msgErr = 'please fill this field';
  report: Report ;
  company: Company ;
  projects: any[];
  selectedWell: Well;
  sites: Site [];
  wells: Well[];

  constructor(private dataService: DataService, private wellService: WellService) {
    this.colNumber = 2;
    this.company = dataService.getCompanies().find( x => x.id === '1');
    this.projects = this.dataService.getProjectsByComp(1);
    this.projects.forEach(x => {
      x.sites?.forEach(y => {
        y.sites = [...y.wells]; // fixme: find default name for attr
      });
    });
    this.selectedWell = wellService.getById(this.company ? this.company.id : '1');
    this.report = {
      id: 1,
      title: 'ENF 20',
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

  selectItem(e) {
    this.selectedWell = e.itemData;
  }
}
