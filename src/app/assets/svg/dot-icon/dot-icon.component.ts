import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assets-svg-dot-icon',
  templateUrl: './dot-icon.component.html',
  styleUrls: ['./dot-icon.component.scss']
})
export class DotIconComponent implements OnInit {
 @Input() fillColor: string = 'black';
 @Input() strokeColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
