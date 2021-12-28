import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.scss'],
})
export class DeleteIconComponent implements OnInit {
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
