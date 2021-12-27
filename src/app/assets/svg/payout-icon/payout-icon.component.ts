import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-payout-icon',
  templateUrl: './payout-icon.component.html',
  styleUrls: ['./payout-icon.component.scss'],
})
export class PayoutIconComponent implements OnInit {
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
