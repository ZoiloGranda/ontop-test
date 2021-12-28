import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.scss'],
})
export class EditIconComponent implements OnInit {
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
