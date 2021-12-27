import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assets-svg-contracts',
  templateUrl: './contracts-icon.component.html',
  styleUrls: ['./contracts-icon.component.scss'],
})
export class ContractsIconComponent implements OnInit {
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
