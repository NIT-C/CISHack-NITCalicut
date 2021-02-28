import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFullComponent } from './blog-full.component';

describe('BlogFullComponent', () => {
  let component: BlogFullComponent;
  let fixture: ComponentFixture<BlogFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
