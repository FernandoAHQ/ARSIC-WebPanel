import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosHistorialComponent } from './servicios-historial.component';

describe('ServiciosHistorialComponent', () => {
  let component: ServiciosHistorialComponent;
  let fixture: ComponentFixture<ServiciosHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
