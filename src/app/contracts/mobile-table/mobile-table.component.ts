import { Component, OnInit, Input } from '@angular/core';
import { TableDataType } from 'src/app/types';

@Component({
  selector: 'contracts-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.scss'],
})
export class MobileTableComponent implements OnInit {
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
