import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlinikaComponent } from './klinika.component';

describe('KlinikaComponent', () => {
  let component: KlinikaComponent;
  let fixture: ComponentFixture<KlinikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlinikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlinikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
