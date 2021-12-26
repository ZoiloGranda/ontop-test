import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent implements OnInit {
  @Input() title: string = 'filter'
  @Input() leftIconName: string = ''
  @Input() rightIconName: string = ''
  @Input() leftIconFillColor: string = 'black'
  @Input() btnBgColorClass: string = 'bg-red-500'
  defaultClasses = true

  constructor() {}

  ngOnInit(): void {}
}
