import { Component, OnInit } from '@angular/core';
import {DailyDrillingService} from '../../daily-drilling.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-ddr-list',
  templateUrl: './ddr-list.component.html',
  styleUrls: ['./ddr-list.component.scss']
})
export class DdrListComponent implements OnInit {

  dataSource: any;
  priority: any[];
  columns = ['N°', 'Title', 'Date', 'Status', 'Creator'];

  constructor(private drillingService: DailyDrillingService) {
    drillingService.getAll().subscribe(
      rep => this.dataSource = rep
    );
  }
  ngOnInit() {
  }

  updateReportInfo($event: any) {
    console.log($event);
    this.drillingService.deleteById(1).subscribe(
      resp => notify(resp)
    );
  }

}
