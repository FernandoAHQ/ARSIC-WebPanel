import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarServiceComponent } from './asignar-service.component';

describe('AsignarServiceComponentComponent', () => {
  let component: AsignarServiceComponent;
  let fixture: ComponentFixture<AsignarServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
