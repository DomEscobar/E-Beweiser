import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormFooterComponent } from './new-form-footer.component';

describe('NewFormFooterComponent', () => {
  let component: NewFormFooterComponent;
  let fixture: ComponentFixture<NewFormFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
