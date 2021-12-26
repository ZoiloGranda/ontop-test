import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contractsComponent } from './contracts.component';

describe('contractsComponent', () => {
  let component: contractsComponent;
  let fixture: ComponentFixture<contractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(contractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
