import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeEnable: boolean = false;
  darkObservable: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.darkObservable.subscribe((value) => {
      this.darkModeEnable = value;
    });
  }

  darkModeOn() {
    this.darkModeEnable = true;
    this.darkObservable.next(this.darkModeEnable);
  }

  darkModeOff() {
    this.darkModeEnable = false;
    this.darkObservable.next(this.darkModeEnable);
  }

  get DarkModeEnabled() {
    return this.darkModeEnable;
  }
}
