import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrziPreglediListComponent } from './brzi-pregledi-list.component';

describe('BrziPreglediListComponent', () => {
  let component: BrziPreglediListComponent;
  let fixture: ComponentFixture<BrziPreglediListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrziPreglediListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrziPreglediListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
