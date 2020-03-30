import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationContainerComponent } from './donation-container.component';

describe('DonationContainerComponent', () => {
  let component: DonationContainerComponent;
  let fixture: ComponentFixture<DonationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
