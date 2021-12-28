import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-actions-list',
  templateUrl: './generic-actions-list.component.html',
  styleUrls: ['./generic-actions-list.component.scss'],
})
export class GenericActionsListComponent implements OnInit {
  actions: {
    label: string;
    value: string;
    icon: string;
    iconColor: string;
  }[] = [
    { label: 'Edit', value: 'edit', icon: 'edit', iconColor: '#898989' },
    { label: 'Sign', value: 'sign', icon: 'sign', iconColor: '#898989' },
    {
      label: 'View Summary',
      value: 'viewSummary',
      icon: 'document',
      iconColor: '#898989',
    },
    { label: 'Delete', value: 'delete', icon: 'delete', iconColor: '#FF5A70' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
