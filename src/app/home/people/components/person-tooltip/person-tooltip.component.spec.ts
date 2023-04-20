import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTooltipComponent } from './person-tooltip.component';

describe('PersonTooltipComponent', () => {
  let component: PersonTooltipComponent;
  let fixture: ComponentFixture<PersonTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
