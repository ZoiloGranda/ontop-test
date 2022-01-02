import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'contracts-mobile-table-row',
  host: {
    class: 'col-span-12 grid grid-cols-12  h-9 content-center text-black-3B3B3B',
  },
  templateUrl: './mobile-table-row.component.html',
  styleUrls: ['./mobile-table-row.component.scss'],
})
export class MobileTableRowComponent implements OnInit {
  @HostBinding('class.bg-gray-F9F9F9') @Input() isEven: boolean = true;
  @Input() header: string = '';
  @Input() text: any = '';
  @Input() isLast: boolean = true;
  @Input() rowIndex: number = 0;

  menuIsVisible: boolean[] = [];

  toggleVisibleMenu = (index: number) => {
    this.menuIsVisible[index] = this.menuIsVisible[index] ? true : false;
    this.menuIsVisible = this.menuIsVisible.map((el, i) => {
      if (el === false && index === i) el = true;
      else if (el === true && index === i) el = false;
      else el = false;
      return el;
    });
  };

  constructor() {}

  ngOnInit(): void {}
}
