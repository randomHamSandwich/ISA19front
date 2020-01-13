import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarListComponent } from './lekar-list.component';

describe('LekarListComponent', () => {
  let component: LekarListComponent;
  let fixture: ComponentFixture<LekarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
