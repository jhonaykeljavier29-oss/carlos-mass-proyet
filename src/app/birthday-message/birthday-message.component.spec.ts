import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayMessageComponent } from './birthday-message.component';

describe('BirthdayMessageComponent', () => {
  let component: BirthdayMessageComponent;
  let fixture: ComponentFixture<BirthdayMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
