import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assets-svg-time-icon',
  templateUrl: './time-icon.component.html',
  styleUrls: ['./time-icon.component.scss'],
})
export class TimeIconComponent implements OnInit {
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
