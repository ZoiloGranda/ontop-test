import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutIconComponent } from './payout-icon.component';

describe('PayoutIconComponent', () => {
  let component: PayoutIconComponent;
  let fixture: ComponentFixture<PayoutIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
