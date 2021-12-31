import { Component, OnInit, HostListener } from '@angular/core';
import { TableDataType } from '../types';
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  tableData: TableDataType = {
    headers: [
      { label: 'Contractor Name', key: 'contractorName' },
      { label: 'Type', key: 'type' },
      { label: 'Start Date', key: 'startDate' },
      { label: 'Amount', key: 'amount' },
      { label: 'Status', key: 'status' },
      { label: 'Actions', key: 'actions' },
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

  public innerWidth: number = 1920;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
