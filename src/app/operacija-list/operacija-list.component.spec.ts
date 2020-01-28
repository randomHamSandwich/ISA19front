import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacijaListComponent } from './operacija-list.component';

describe('OperacijaListComponent', () => {
  let component: OperacijaListComponent;
  let fixture: ComponentFixture<OperacijaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacijaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacijaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
