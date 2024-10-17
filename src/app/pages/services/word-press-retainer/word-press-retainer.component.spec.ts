import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressRetainerComponent } from './word-press-retainer.component';

describe('WordPressRetainerComponent', () => {
  let component: WordPressRetainerComponent;
  let fixture: ComponentFixture<WordPressRetainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressRetainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressRetainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
