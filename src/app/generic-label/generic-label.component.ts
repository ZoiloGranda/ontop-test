import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-label',
  templateUrl: './generic-label.component.html',
  styleUrls: ['./generic-label.component.scss'],
})
export class GenericLabelComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
