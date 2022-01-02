import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-actions-list',
  templateUrl: './generic-actions-list.component.html',
  styleUrls: ['./generic-actions-list.component.scss'],
})
export class GenericActionsListComponent implements OnInit {
  @Input() actions: {
    label: string;
    value: string;
    icon: string;
    iconColor: string;
  }[] = [{ label: '', value: '', icon: '', iconColor: '' }];
  @Input() isVisible: boolean = false;
  @Input() isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
