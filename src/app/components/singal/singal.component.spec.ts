import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalComponent } from './singal.component';

describe('SingalComponent', () => {
  let component: SingalComponent;
  let fixture: ComponentFixture<SingalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
