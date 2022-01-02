import { Component, Input, OnInit } from '@angular/core';
import { TableRowActionsType, TableRowActionsTypeInitialized } from '../types';

@Component({
  selector: 'app-generic-actions-list',
  templateUrl: './generic-actions-list.component.html',
  styleUrls: ['./generic-actions-list.component.scss'],
})
export class GenericActionsListComponent implements OnInit {
  @Input() actions: TableRowActionsType[] = [TableRowActionsTypeInitialized];
  @Input() isVisible: boolean = false;
  @Input() isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
