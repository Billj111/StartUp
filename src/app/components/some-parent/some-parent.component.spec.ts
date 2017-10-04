import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeParentComponent } from './some-parent.component';

describe('SomeParentComponent', () => {
  let component: SomeParentComponent;
  let fixture: ComponentFixture<SomeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
