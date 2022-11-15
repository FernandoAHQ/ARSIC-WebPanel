import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistentesComponent } from './existentes.component';

describe('ExistentesComponent', () => {
  let component: ExistentesComponent;
  let fixture: ComponentFixture<ExistentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
