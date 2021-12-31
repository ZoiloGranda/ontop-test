import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTableRowComponent } from './mobile-table-row.component';

describe('MobileTableRowComponent', () => {
  let component: MobileTableRowComponent;
  let fixture: ComponentFixture<MobileTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
