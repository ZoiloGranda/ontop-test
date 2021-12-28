import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericLabelComponent } from './generic-label.component';

describe('GenericLabelComponent', () => {
  let component: GenericLabelComponent;
  let fixture: ComponentFixture<GenericLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
