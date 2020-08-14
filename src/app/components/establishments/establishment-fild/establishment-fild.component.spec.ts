import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentFildComponent } from './establishment-fild.component';

describe('EstablishmentFildComponent', () => {
  let component: EstablishmentFildComponent;
  let fixture: ComponentFixture<EstablishmentFildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentFildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentFildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
