import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../dark-mode.service';

@Component({
  selector: 'contracts-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  nightPlease() {
    this.darkModeService.darkModeOn();
  }

  lightPlease() {
    this.darkModeService.darkModeOff();
  }

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}
}
