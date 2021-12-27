import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() fillColor: string = '';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
