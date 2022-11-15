import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasBitacoraComponent } from './tareas-bitacora.component';

describe('TareasBitacoraComponent', () => {
  let component: TareasBitacoraComponent;
  let fixture: ComponentFixture<TareasBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasBitacoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
