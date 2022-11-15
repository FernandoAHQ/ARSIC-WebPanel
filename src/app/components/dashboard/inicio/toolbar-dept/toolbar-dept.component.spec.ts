import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDeptComponent } from './toolbar-dept.component';

describe('ToolbarDeptComponent', () => {
  let component: ToolbarDeptComponent;
  let fixture: ComponentFixture<ToolbarDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
