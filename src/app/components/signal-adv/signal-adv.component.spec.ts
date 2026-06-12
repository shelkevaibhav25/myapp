import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalAdvComponent } from './signal-adv.component';

describe('SignalAdvComponent', () => {
  let component: SignalAdvComponent;
  let fixture: ComponentFixture<SignalAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalAdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
