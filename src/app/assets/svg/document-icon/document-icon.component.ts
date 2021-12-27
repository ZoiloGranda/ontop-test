import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-document-icon',
  templateUrl: './document-icon.component.html',
  styleUrls: ['./document-icon.component.scss'],
})
export class DocumentIconComponent implements OnInit {
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = 'black';

  constructor() {}

  ngOnInit(): void {}
}
