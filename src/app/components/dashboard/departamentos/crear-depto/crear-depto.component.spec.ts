import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDeptoComponent } from './crear-depto.component';

describe('CrearDeptoComponent', () => {
  let component: CrearDeptoComponent;
  let fixture: ComponentFixture<CrearDeptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDeptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDeptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
