import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotIconComponent } from './dot-icon.component';

describe('DotIconComponent', () => {
  let component: DotIconComponent;
  let fixture: ComponentFixture<DotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
