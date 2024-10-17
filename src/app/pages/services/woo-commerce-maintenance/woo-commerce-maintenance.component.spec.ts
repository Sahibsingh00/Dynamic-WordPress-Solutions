import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WooCommerceMaintenanceComponent } from './woo-commerce-maintenance.component';

describe('WooCommerceMaintenanceComponent', () => {
  let component: WooCommerceMaintenanceComponent;
  let fixture: ComponentFixture<WooCommerceMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WooCommerceMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WooCommerceMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
