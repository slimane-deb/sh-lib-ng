import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mud-inventory',
  templateUrl: './mud-inventory.component.html',
  styleUrls: ['./mud-inventory.component.scss']
})
export class MudInventoryComponent implements OnInit {

  dataSource: any[] = [{
    product_name: '',
    unit_size: '',
    quantity_received: 0.0,
    quantity_used: 0.0,
    quantity_end: 0.0,
  }
  ];
  fields;

  constructor() { }

  ngOnInit() {
    this.fields = Object.keys(this.dataSource[0]);

  }

}
