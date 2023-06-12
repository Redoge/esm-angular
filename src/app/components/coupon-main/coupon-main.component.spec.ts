import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponMainComponent } from './coupon-main.component';

describe('CouponMainComponent', () => {
  let component: CouponMainComponent;
  let fixture: ComponentFixture<CouponMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
