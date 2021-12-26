import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrls: ['./svg-loader.component.scss'],
})
export class SvgLoaderComponent implements OnInit {
  @Input() iconName: string = 'arrow';
  @Input() fillColor: string = 'black';
  @Input() strokeColor: string = 'red';

  constructor() {}

  ngOnInit(): void {}
}
