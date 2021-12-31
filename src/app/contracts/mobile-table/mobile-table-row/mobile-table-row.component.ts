import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'contracts-mobile-table-row',
  host: {
    class: 'col-span-12 grid grid-cols-12  h-9 content-center',
  },
  templateUrl: './mobile-table-row.component.html',
  styleUrls: ['./mobile-table-row.component.scss'],
})
export class MobileTableRowComponent implements OnInit {
  @Input() header: string = '';
  @Input() text: string = '';
  @HostBinding('class.bg-gray-F9F9F9') @Input() isEven: boolean = true;
  @Input() isLast: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
