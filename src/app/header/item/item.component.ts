import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() title: string = "Default Title";
  @Input() leftIcon: string = "assets/icons/contracts.svg";
  @Input() rightIcon: string = "assets/icons/arrow.svg";

  constructor() {}

  ngOnInit(): void {}
}
