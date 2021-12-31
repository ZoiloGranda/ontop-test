import { Component, Input, OnInit } from '@angular/core';
import { TableHeadersType } from 'src/app/types';

@Component({
  selector: 'contracts-table-head',
  templateUrl: './t-head.component.html',
  styleUrls: ['./t-head.component.scss'],
})
export class THeadComponent implements OnInit {
  @Input() headers: TableHeadersType = [{ label: '', key: '' }];

  constructor() {}

  ngOnInit(): void {}
}
