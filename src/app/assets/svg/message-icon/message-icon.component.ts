import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-message-icon',
  templateUrl: './message-icon.component.html',
  styleUrls: ['./message-icon.component.scss'],
})
export class MessageIconComponent implements OnInit {
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
