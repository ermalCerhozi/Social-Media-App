import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostsComponent } from './edit-posts.component';

describe('UpdatePostsComponent', () => {
  let component: UpdatePostsComponent;
  let fixture: ComponentFixture<UpdatePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
