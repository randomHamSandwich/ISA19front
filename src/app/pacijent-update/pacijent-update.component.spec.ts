import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentUpdateComponent } from './pacijent-update.component';

describe('PacijentUpdateComponent', () => {
  let component: PacijentUpdateComponent;
  let fixture: ComponentFixture<PacijentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacijentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacijentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
