import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaDayComponent } from './nasa-day.component';

describe('NasaDayComponent', () => {
  let component: NasaDayComponent;
  let fixture: ComponentFixture<NasaDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
