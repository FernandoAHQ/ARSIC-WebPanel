import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosHoyComponent } from './servicios-hoy.component';

describe('ServiciosHoyComponent', () => {
  let component: ServiciosHoyComponent;
  let fixture: ComponentFixture<ServiciosHoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosHoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
