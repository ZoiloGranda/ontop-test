import { Component, Input, OnInit } from '@angular/core';
import { TableRowType, TableRowTypeInitialized } from 'src/app/types';

@Component({
  selector: 'contracts-table-row',
  templateUrl: './t-row.component.html',
  styleUrls: ['./t-row.component.scss'],
})
export class TRowComponent implements OnInit {
  @Input() rows: TableRowType[] = TableRowTypeInitialized;
  menuIsVisible: boolean[] = [];

  toggleVisibleMenu = (index: number) => {
    this.menuIsVisible[index] = this.menuIsVisible[index] ? true : false;
    this.menuIsVisible = this.menuIsVisible.map((el, i) => {
      if (el === false && index === i) el = true;
      else if (el === true && index === i) el = false;
      else el = false;
      return el;
    });
  };

  constructor() {}

  ngOnInit(): void {}
}
