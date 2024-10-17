import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressSEOServicesComponent } from './word-press-seo-services.component';

describe('WordPressSEOServicesComponent', () => {
  let component: WordPressSEOServicesComponent;
  let fixture: ComponentFixture<WordPressSEOServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressSEOServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressSEOServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
