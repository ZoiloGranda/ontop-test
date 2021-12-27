import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assets-svg-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input() fillColor: string = 'grey';
  @Input() strokeColor: string = 'red';

  constructor() {}

  ngOnInit(): void {}
}
