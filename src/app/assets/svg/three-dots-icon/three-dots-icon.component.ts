import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-three-dots-icon',
  templateUrl: './three-dots-icon.component.html',
  styleUrls: ['./three-dots-icon.component.scss'],
})
export class ThreeDotsIconComponent implements OnInit {
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
