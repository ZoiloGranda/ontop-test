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
      actions: {
        label: string;
        value: string;
        icon: string;
        iconColor: string;
      }[];
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
        actions: [
          { label: 'Edit', value: 'edit', icon: 'edit', iconColor: '#898989' },
          { label: 'Sign', value: 'sign', icon: 'sign', iconColor: '#898989' },
          {
            label: 'View Summary',
            value: 'viewSummary',
            icon: 'document',
            iconColor: '#898989',
          },
          {
            label: 'Delete',
            value: 'delete',
            icon: 'delete',
            iconColor: '#FF5A70',
          },
        ],
      },
      {
        profilePic: 'assets/imgs/user_pic_2.png',
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4, 2021',
        amount: '$200 USD',
        status: 'Active',
        actions: [
          { label: 'Edit', value: 'edit', icon: 'edit', iconColor: '#898989' },
          { label: 'Sign', value: 'sign', icon: 'sign', iconColor: '#898989' },
          {
            label: 'View Summary',
            value: 'viewSummary',
            icon: 'document',
            iconColor: '#898989',
          },
          {
            label: 'Delete',
            value: 'delete',
            icon: 'delete',
            iconColor: '#FF5A70',
          },
        ],
      },
      {
        profilePic: 'assets/imgs/user_pic_3.png',
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4, 2021',
        amount: '$200 USD',
        status: 'Signature Pending',
        actions: [
          { label: 'Edit', value: 'edit', icon: 'edit', iconColor: '#898989' },
          { label: 'Sign', value: 'sign', icon: 'sign', iconColor: '#898989' },
          {
            label: 'View Summary',
            value: 'viewSummary',
            icon: 'document',
            iconColor: '#898989',
          },
          {
            label: 'Delete',
            value: 'delete',
            icon: 'delete',
            iconColor: '#FF5A70',
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
