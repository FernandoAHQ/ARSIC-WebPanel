import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalperiodosComponent } from './modalperiodos.component';

describe('ModalperiodosComponent', () => {
  let component: ModalperiodosComponent;
  let fixture: ComponentFixture<ModalperiodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalperiodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalperiodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
