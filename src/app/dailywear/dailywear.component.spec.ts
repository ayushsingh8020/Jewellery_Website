import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywearComponent } from './dailywear.component';

describe('DailywearComponent', () => {
  let component: DailywearComponent;
  let fixture: ComponentFixture<DailywearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailywearComponent]
    });
    fixture = TestBed.createComponent(DailywearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
