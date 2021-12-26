import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data = [
    {
      title: 'contracts',
      leftIcon: 'assets/icons/contracts.svg',
      rightIcon: 'assets/icons/arrow.svg',
    },
    {
      title: 'Documents',
      leftIcon: 'assets/icons/document.svg',
      rightIcon: 'assets/icons/arrow.svg',
    },
    {
      title: 'Payout',
      leftIcon: 'assets/icons/payout.svg',
      rightIcon: 'assets/icons/arrow.svg',
    },
    {
      title: 'Time',
      leftIcon: 'assets/icons/time.svg',
      rightIcon: 'assets/icons/arrow.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
