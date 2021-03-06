import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from '../../../dark-mode.service';

@Component({
  selector: 'contracts-mobile-table-row',
  host: {
    class: 'col-span-12 grid grid-cols-12 h-9 content-center text-black-3B3B3B',
  },
  templateUrl: './mobile-table-row.component.html',
  styleUrls: ['./mobile-table-row.component.scss'],
})
export class MobileTableRowComponent implements OnInit {
  @Input() header: string = '';
  @Input() text: any = '';
  @Input() isLast: boolean = true;
  @Input() rowIndex: number = 0;
  dark = false;
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

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.darkObservable.subscribe((value) => {
      this.dark = value;
    });
  }
}
