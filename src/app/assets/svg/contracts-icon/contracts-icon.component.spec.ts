import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsIconComponent } from './contracts-icon.component';

describe('ContractsIconComponent', () => {
  let component: ContractsIconComponent;
  let fixture: ComponentFixture<ContractsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
