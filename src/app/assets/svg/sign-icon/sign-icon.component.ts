import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-sign-icon',
  templateUrl: './sign-icon.component.html',
  styleUrls: ['./sign-icon.component.scss'],
})
export class SignIconComponent implements OnInit {
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
