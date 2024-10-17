import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressMaintenanceComponent } from './word-press-maintenance.component';

describe('WordPressMaintenanceComponent', () => {
  let component: WordPressMaintenanceComponent;
  let fixture: ComponentFixture<WordPressMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
