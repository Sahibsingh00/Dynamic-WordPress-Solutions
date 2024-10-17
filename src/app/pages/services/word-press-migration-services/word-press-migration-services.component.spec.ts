import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressMigrationServicesComponent } from './word-press-migration-services.component';

describe('WordPressMigrationServicesComponent', () => {
  let component: WordPressMigrationServicesComponent;
  let fixture: ComponentFixture<WordPressMigrationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordPressMigrationServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPressMigrationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
