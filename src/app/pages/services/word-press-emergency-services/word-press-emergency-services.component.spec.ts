import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressEmergencyServicesComponent } from './word-press-emergency-services.component';

describe('WordPressEmergencyServicesComponent', () => {
  let component: WordPressEmergencyServicesComponent;
  let fixture: ComponentFixture<WordPressEmergencyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressEmergencyServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressEmergencyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
