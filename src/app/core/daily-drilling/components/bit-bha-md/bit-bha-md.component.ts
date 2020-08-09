import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomFormComponent} from '../../../../../../projects/custom-form/src/lib/custom-form.component';
import * as classInstance from '../../../../formClass';
import {DrillBha} from '../../../models/drill-bha';
import {mudTabs} from './mud-tabs';

@Component({
  selector: 'app-bit-bha-md',
  templateUrl: './bit-bha-md.component.html',
  styleUrls: ['./bit-bha-md.component.scss']
})
export class BitBhaMdComponent implements OnInit {

  @ViewChild(CustomFormComponent) dynamicForm: CustomFormComponent;

  mudChecks = new Array<any>(3);
  classInst = classInstance;
  formClass = 'FormPersonnel';
  colNum = 2;
  dataSource: DrillBha[] = [{
    od: 5.5,
    toolType: 'HW',
    jtsNumber: 5,
    length: 11.2
  }
  ];

  constructor() {
  }

  clickSend() {
    console.log(this.dynamicForm.generateDataToSend());
  }
  ngOnInit() {
    this.mudChecks = mudTabs;
    this.mudChecks[0].data = [{ item: 'Distance to water well 1km Water well flow rate: 20 m3/h'  }, { item: 'Itemm2'   }];
    this.mudChecks[1].data = [{ item: 'AVA :02 FUEL TANKS + MUD CABIN'  }, { item: 'Itemm2'   }];
    this.mudChecks[2].data = [{ item: '18 JTS STRAINER TUB 4’’ ½ 13.5# P110 N-VAM'  }, { item: 'Itemm2'   }];
  }


  saveBitBhaMud($event: any) {
    console.log($event);
  }
}
