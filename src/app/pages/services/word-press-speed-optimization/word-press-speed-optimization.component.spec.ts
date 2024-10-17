import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressSpeedOptimizationComponent } from './word-press-speed-optimization.component';

describe('WordPressSpeedOptimizationComponent', () => {
  let component: WordPressSpeedOptimizationComponent;
  let fixture: ComponentFixture<WordPressSpeedOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressSpeedOptimizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressSpeedOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
