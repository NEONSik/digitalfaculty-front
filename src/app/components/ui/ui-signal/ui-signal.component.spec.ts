import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSignalComponent } from './ui-signal.component';

describe('UiSignalComponent', () => {
  let component: UiSignalComponent;
  let fixture: ComponentFixture<UiSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
