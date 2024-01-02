import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConverterComponent } from './app-converter.component';

describe('AppConverterComponent', () => {
  let component: AppConverterComponent;
  let fixture: ComponentFixture<AppConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
