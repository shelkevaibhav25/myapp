import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBehComponent } from './sub-beh.component';

describe('SubBehComponent', () => {
  let component: SubBehComponent;
  let fixture: ComponentFixture<SubBehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBehComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
