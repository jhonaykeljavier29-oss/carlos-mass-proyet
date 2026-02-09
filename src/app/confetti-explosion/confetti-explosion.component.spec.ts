import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfettiExplosionComponent } from './confetti-explosion.component';

describe('ConfettiExplosionComponent', () => {
  let component: ConfettiExplosionComponent;
  let fixture: ComponentFixture<ConfettiExplosionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfettiExplosionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfettiExplosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
