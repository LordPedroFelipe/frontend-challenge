import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsGridComponent } from './establishments-grid.component';

describe('EstablishmentsGridComponent', () => {
  let component: EstablishmentsGridComponent;
  let fixture: ComponentFixture<EstablishmentsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
