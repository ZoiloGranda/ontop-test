import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contracts-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() client: string = '';
  constructor() {}

  ngOnInit(): void {}
}
