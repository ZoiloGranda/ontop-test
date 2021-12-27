import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() title: string = 'Default Title';
  @Input() leftIcon: string = '';
  @Input() leftIconColor: string = '';
  @Input() rightIcon: string = '';
  @Input() rightIconColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
