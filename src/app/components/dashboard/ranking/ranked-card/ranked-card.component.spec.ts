import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedCardComponent } from './ranked-card.component';

describe('RankedCardComponent', () => {
  let component: RankedCardComponent;
  let fixture: ComponentFixture<RankedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
