import { Component, OnInit, Input } from '@angular/core';
import { TableDataType, TableDataTypeInitialized } from 'src/app/types';

@Component({
  selector: 'contracts-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.scss'],
})
export class MobileTableComponent implements OnInit {
  @Input() tableData: TableDataType = TableDataTypeInitialized;

  constructor() {}

  ngOnInit(): void {}
}
