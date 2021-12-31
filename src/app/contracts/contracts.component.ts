import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
})
export class ContractsComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }
  public innerWidth: number = 1920;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

}
