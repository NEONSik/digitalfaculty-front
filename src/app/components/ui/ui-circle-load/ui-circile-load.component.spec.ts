import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCircileLoadComponent } from './ui-circile-load.component';

describe('UiCircileLoadComponent', () => {
  let component: UiCircileLoadComponent;
  let fixture: ComponentFixture<UiCircileLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCircileLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCircileLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
