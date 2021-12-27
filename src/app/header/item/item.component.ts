import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: {
    title: string;
    leftIcon: string;
    leftIconColor: string;
    rightIcon: string;
    rightIconColor: string;
    active: boolean;
  } = {
    title: '',
    leftIcon: '',
    leftIconColor: '',
    rightIcon: '',
    rightIconColor: '',
    active: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
