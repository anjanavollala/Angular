import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRendererComponent } from './status-renderer.component';

describe('StatusRendererComponent', () => {
  let component: StatusRendererComponent;
  let fixture: ComponentFixture<StatusRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusRendererComponent]
    });
    fixture = TestBed.createComponent(StatusRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
