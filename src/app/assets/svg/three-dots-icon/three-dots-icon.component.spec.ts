import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotsIconComponent } from './three-dots-icon.component';

describe('ThreeDotsIconComponent', () => {
  let component: ThreeDotsIconComponent;
  let fixture: ComponentFixture<ThreeDotsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDotsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDotsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
