import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAdvComponent } from './reactive-form-adv.component';

describe('ReactiveFormAdvComponent', () => {
  let component: ReactiveFormAdvComponent;
  let fixture: ComponentFixture<ReactiveFormAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
