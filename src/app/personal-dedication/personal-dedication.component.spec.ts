import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDedicationComponent } from './personal-dedication.component';

describe('PersonalDedicationComponent', () => {
  let component: PersonalDedicationComponent;
  let fixture: ComponentFixture<PersonalDedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDedicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
