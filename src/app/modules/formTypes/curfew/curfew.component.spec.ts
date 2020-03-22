import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurfewComponent } from './curfew.component';

describe('CurfewComponent', () => {
  let component: CurfewComponent;
  let fixture: ComponentFixture<CurfewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurfewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurfewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
