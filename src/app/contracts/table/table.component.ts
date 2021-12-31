import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contracts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: {
    headers: string[];
    rows: {
      profilePic: string;
      contractorName: string;
      type: string;
      startDate: string;
      amount: string;
      status: string;
      actions: {
        label: string;
        value: string;
        icon: string;
        iconColor: string;
      }[];
    }[];
  } = {
    headers: [''],
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
