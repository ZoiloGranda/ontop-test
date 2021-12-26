import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = 'red';

  constructor() {}

  ngOnInit(): void {}
}
