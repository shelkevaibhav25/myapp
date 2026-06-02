import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowNgIfComponent } from './hide-show-ng-if.component';

describe('HideShowNgIfComponent', () => {
  let component: HideShowNgIfComponent;
  let fixture: ComponentFixture<HideShowNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideShowNgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideShowNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
