import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCubesComponent } from './ui-cubes.component';

describe('UiCubesComponent', () => {
  let component: UiCubesComponent;
  let fixture: ComponentFixture<UiCubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
