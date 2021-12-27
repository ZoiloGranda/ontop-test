import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contracts-table-head',
  templateUrl: './t-head.component.html',
  styleUrls: ['./t-head.component.scss'],
})
export class THeadComponent implements OnInit {
  @Input() items: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
