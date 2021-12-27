import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THeadComponent } from './t-head.component';

describe('THeadComponent', () => {
  let component: THeadComponent;
  let fixture: ComponentFixture<THeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ THeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(THeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
