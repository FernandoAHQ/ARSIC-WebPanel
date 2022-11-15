import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarApComponent } from './modificar-ap.component';

describe('ModificarApComponent', () => {
  let component: ModificarApComponent;
  let fixture: ComponentFixture<ModificarApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
