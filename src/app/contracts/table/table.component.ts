import { Component, OnInit, Input } from '@angular/core';
import { TableDataType } from 'src/app/types';

@Component({
  selector: 'contracts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: TableDataType = {
    headers: [{ label: '', key: '' }],
    rows: [
      {
        profilePic: '',
        contractorName: '',
        type: '',
        startDate: '',
        amount: '',
        status: '',
        actions: [{ label: '', value: '', icon: '', iconColor: '' }],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
