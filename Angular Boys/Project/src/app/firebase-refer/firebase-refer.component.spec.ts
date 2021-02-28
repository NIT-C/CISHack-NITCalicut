import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseReferComponent } from './firebase-refer.component';

describe('FirebaseReferComponent', () => {
  let component: FirebaseReferComponent;
  let fixture: ComponentFixture<FirebaseReferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseReferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
