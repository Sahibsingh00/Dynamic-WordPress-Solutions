import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressDemandSupportComponent } from './word-press-demand-support.component';

describe('WordPressDemandSupportComponent', () => {
  let component: WordPressDemandSupportComponent;
  let fixture: ComponentFixture<WordPressDemandSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressDemandSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressDemandSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
