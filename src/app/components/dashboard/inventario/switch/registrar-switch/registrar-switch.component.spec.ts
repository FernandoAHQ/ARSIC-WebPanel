import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSwitchComponent } from './registrar-switch.component';

describe('RegistrarSwitchComponent', () => {
  let component: RegistrarSwitchComponent;
  let fixture: ComponentFixture<RegistrarSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
