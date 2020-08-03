import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as classInstance from '../../../../formClass';
import {FormRemarks} from '../../../../formClass';
import {BaseFormComponent} from '../../../../shared/components/base-form/base-form.component';
import {noteTabs} from './notes-tabs';
import {DxDataGridComponent} from 'devextreme-angular';

@Component({
  selector: 'app-daily-notes',
  templateUrl: './daily-notes.component.html',
  styleUrls: ['./daily-notes.component.scss']
})
export class DailyNotesComponent extends BaseFormComponent implements OnInit, AfterViewInit {
  notes = new Array<any>(3);
  @ViewChild('gridComponent')
  grid: DxDataGridComponent;

  constructor() {
    super();
    this.classInst = classInstance;
    this.formClass = FormRemarks.name;
    this.colNum = 1;
  }

  ngOnInit() {
    this.notes = noteTabs;
    this.notes[0].data = [{ item: 'Distance to water well 1km Water well flow rate: 20 m3/h'  }, { item: 'Itemm2'   }];
    this.notes[1].data = [{ item: 'AVA :02 FUEL TANKS + MUD CABIN'  }, { item: 'Itemm2'   }];
    this.notes[2].data = [{ item: '18 JTS STRAINER TUB 4’’ ½ 13.5# P110 N-VAM'  }, { item: 'Itemm2'   }];

  }


  ngAfterViewInit(): void {
    console.log(this.grid);
  }

}
