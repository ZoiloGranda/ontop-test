import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contracts-table-row',
  templateUrl: './t-row.component.html',
  styleUrls: ['./t-row.component.scss'],
})
export class TRowComponent implements OnInit {
  @Input() rows: {
    profilePic: string;
    contractorName: string;
    type: string;
    startDate: string;
    amount: string;
    status: string;
    actions: string[];
  }[] = [
    {
      profilePic: '',
      contractorName: '',
      type: '',
      startDate: '',
      amount: '',
      status: '',
      actions: [''],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
