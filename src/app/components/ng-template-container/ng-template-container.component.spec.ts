import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateContainerComponent } from './ng-template-container.component';

describe('NgTemplateContainerComponent', () => {
  let component: NgTemplateContainerComponent;
  let fixture: ComponentFixture<NgTemplateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
