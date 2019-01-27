import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalsearchwithlogoComponent } from './globalsearchwithlogo.component';

describe('GlobalsearchwithlogoComponent', () => {
  let component: GlobalsearchwithlogoComponent;
  let fixture: ComponentFixture<GlobalsearchwithlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalsearchwithlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalsearchwithlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
