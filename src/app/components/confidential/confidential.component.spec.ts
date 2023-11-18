import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialComponent } from './confidential.component';

describe('ConfidentialComponent', () => {
  let component: ConfidentialComponent;
  let fixture: ComponentFixture<ConfidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfidentialComponent]
    });
    fixture = TestBed.createComponent(ConfidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
