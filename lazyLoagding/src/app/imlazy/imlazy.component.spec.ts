import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImlazyComponent } from './imlazy.component';

describe('ImlazyComponent', () => {
  let component: ImlazyComponent;
  let fixture: ComponentFixture<ImlazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImlazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
