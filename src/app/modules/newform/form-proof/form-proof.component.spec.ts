import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProofComponent } from './form-proof.component';

describe('FormProofComponent', () => {
  let component: FormProofComponent;
  let fixture: ComponentFixture<FormProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
