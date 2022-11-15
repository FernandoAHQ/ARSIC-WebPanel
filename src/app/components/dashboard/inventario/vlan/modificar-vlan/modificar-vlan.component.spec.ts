import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVlanComponent } from './modificar-vlan.component';

describe('ModificarVlanComponent', () => {
  let component: ModificarVlanComponent;
  let fixture: ComponentFixture<ModificarVlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarVlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarVlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
