import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['./generic-dropdown.component.scss']
})
export class GenericDropdownComponent implements OnInit {
 @Input() text: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
