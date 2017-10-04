import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeTableComponent } from './some-table.component';

describe('SomeTableComponent', () => {
  let component: SomeTableComponent;
  let fixture: ComponentFixture<SomeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
