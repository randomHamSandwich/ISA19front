import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlinikaListComponent } from './klinika-list.component';

describe('KlinikaListComponent', () => {
  let component: KlinikaListComponent;
  let fixture: ComponentFixture<KlinikaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlinikaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlinikaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
