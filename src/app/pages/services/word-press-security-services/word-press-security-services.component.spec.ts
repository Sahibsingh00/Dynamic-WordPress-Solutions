import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressSecurityServicesComponent } from './word-press-security-services.component';

describe('WordPressSecurityServicesComponent', () => {
  let component: WordPressSecurityServicesComponent;
  let fixture: ComponentFixture<WordPressSecurityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressSecurityServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressSecurityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
