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
    },
    {
      title: 'Documents',
      leftIcon: 'document',
      leftIconColor: '#898989',
      rightIcon: 'arrow',
      rightIconColor: '#898989',
    },
    {
      title: 'Payout',
      leftIcon: 'payout',
      leftIconColor: '#898989',
      rightIcon: 'arrow',
      rightIconColor: '#898989',
    },
    {
      title: 'Time',
      leftIcon: 'time',
      leftIconColor: '#898989',
      rightIcon: 'arrow',
      rightIconColor: '#898989',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
