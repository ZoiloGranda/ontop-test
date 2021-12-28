import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIconComponent } from './sign-icon.component';

describe('SignIconComponent', () => {
  let component: SignIconComponent;
  let fixture: ComponentFixture<SignIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
