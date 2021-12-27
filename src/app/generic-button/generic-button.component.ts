import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent implements OnInit {
  @Input() text: string = 'filter'
  @Input() textColorClass: string = 'text-black'
  @Input() leftIconName: string = ''
  @Input() rightIconName: string = ''
  @Input() leftIconFillColor: string = 'black'
  @Input() leftIconStrokeColor: string = 'red'
  @Input() rightIconFillColor: string = 'blue'
  @Input() rightIconStrokeColor: string = 'red'
  @Input() btnClasses: string = 'bg-red-500'
  defaultClasses = true

  constructor() {}

  ngOnInit(): void {}
}
