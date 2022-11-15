import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeriodoComponent } from './crear-periodo.component';

describe('CrearPeriodoComponent', () => {
  let component: CrearPeriodoComponent;
  let fixture: ComponentFixture<CrearPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
