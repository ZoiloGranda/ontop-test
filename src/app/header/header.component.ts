import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data = [
    {
      title: 'Contracts',
      leftIcon: 'contracts',
      leftIconColor: '#FF5A70',
      rightIcon: 'arrow',
      rightIconColor: '#FF5A70',
      active: true,
    },
    {
      title: 'Documents',
      leftIcon: 'document',
      leftIconColor: '#898989',
      rightIcon: 'arrow',
      rightIconColor: '#898989',
      active: false,
    },
    {
      title: 'Payout',
      leftIcon: 'payout',
      leftIconColor: '#898989',
      rightIcon: 'arrow',
      rightIconColor: '#898989',
      active: false,
    },
    {
      title: 'Time',
      leftIcon: 'time',
      leftIconColor: '#898989',
      rightIcon: 'arrow',
      rightIconColor: '#898989',
      active: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
