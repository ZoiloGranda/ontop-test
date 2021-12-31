import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-three-bars-icon',
  templateUrl: './three-bars-icon.component.html',
  styleUrls: ['./three-bars-icon.component.scss'],
})
export class ThreeBarsIconComponent implements OnInit {
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
