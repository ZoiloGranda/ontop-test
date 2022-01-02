import { Component, OnInit, Input } from '@angular/core';
import { TableDataType, TableDataTypeInitialized } from 'src/app/types';

@Component({
  selector: 'contracts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: TableDataType = TableDataTypeInitialized;

  constructor() {}

  ngOnInit(): void {}
}
