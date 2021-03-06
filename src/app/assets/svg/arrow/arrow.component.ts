import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assets-svg-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent implements OnInit {
  @Input() fillColor: string = 'grey';
  @Input() strokeColor: string = '';
  @Input() width: string = '16';
  @Input() height: string = '16';

  constructor() {}

  ngOnInit(): void {}
}
