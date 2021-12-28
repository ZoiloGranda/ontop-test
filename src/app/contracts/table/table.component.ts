import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contracts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  tableData: {
    headers: string[];
    rows: {
      profilePic: string;
      contractorName: string;
      type: string;
      startDate: string;
      amount: string;
      status: string;
      actions: string[];
    }[];
  } = {
    headers: [
      'Contractor Name',
      'Type',
      'Start Date',
      'Amount',
      'Status',
      'Actions',
    ],
    rows: [
      {
        profilePic: 'assets/imgs/user_pic_1.png',
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4, 2021',
        amount: '$200 USD',
        status: 'Active',
        actions: ['Edit', 'Sign', 'View summary', 'Delete'],
      },
      {
        profilePic: 'assets/imgs/user_pic_2.png',
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4, 2021',
        amount: '$200 USD',
        status: 'Active',
        actions: ['Edit', 'Sign', 'View summary', 'Delete'],
      },
      {
        profilePic: 'assets/imgs/user_pic_3.png',
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4, 2021',
        amount: '$200 USD',
        status: 'Signature Pending',
        actions: ['Edit', 'Sign', 'View summary', 'Delete'],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
