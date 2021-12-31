import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBarsIconComponent } from './three-bars-icon.component';

describe('ThreeBarsIconComponent', () => {
  let component: ThreeBarsIconComponent;
  let fixture: ComponentFixture<ThreeBarsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeBarsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeBarsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
