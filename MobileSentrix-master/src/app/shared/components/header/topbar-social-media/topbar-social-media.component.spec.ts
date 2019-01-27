import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSocialMediaComponent } from './topbar-social-media.component';

describe('TopbarSocialMediaComponent', () => {
  let component: TopbarSocialMediaComponent;
  let fixture: ComponentFixture<TopbarSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
