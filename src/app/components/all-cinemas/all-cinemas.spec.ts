import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCinemas } from './all-cinemas';

describe('AllCinemas', () => {
  let component: AllCinemas;
  let fixture: ComponentFixture<AllCinemas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCinemas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCinemas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
