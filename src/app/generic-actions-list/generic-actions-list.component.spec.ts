import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericActionsListComponent } from './generic-actions-list.component';

describe('GenericActionsListComponent', () => {
  let component: GenericActionsListComponent;
  let fixture: ComponentFixture<GenericActionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericActionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericActionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
