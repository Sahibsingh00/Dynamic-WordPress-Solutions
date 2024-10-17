import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressDevelopmentComponent } from './word-press-development.component';

describe('WordPressDevelopmentComponent', () => {
  let component: WordPressDevelopmentComponent;
  let fixture: ComponentFixture<WordPressDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
