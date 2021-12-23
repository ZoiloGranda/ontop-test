import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data = [
    {
      title: 'Contacts',
      leftIcon: 'assets/icons/contacts.svg',
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
