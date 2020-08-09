import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Well} from '../../../models/well';
import {WellService} from '../../../services/well.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-diag-well',
  templateUrl: './diag-well.component.html',
  styleUrls: ['./diag-well.component.scss'],
  providers: [WellService]
})
export class DiagWellComponent implements OnInit {

  wells: Well[];
  currentWell: Well;
  @Input()
  popupVisible;
  @Output()
  popupClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  GENERATE = 'Generate Report';
  GENERATING = 'Generating';

  constructor(wellService: WellService) {
    this.wells = wellService.getAll();
    this.currentWell = this.wells[0];
  }

  ngOnInit() {
  }
  changeReportState($event) {
    const devState = this.currentWell.completion_well;
    const message = 'The current report is  '
      + (devState ? 'generated' : ' not fully completed');
    this.currentWell.completion_well = devState;

    notify({
        message,
        width: 450
      },
      !!devState ? 'success' : 'error',
      2000);
  }

  closeEvent($event) {
    console.log($event);
    this.popupClose.emit(this.popupVisible);
  }
}
