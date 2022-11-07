import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedLoadingComponent } from './feed-loading.component';

describe('FeedLoadingComponent', () => {
  let component: FeedLoadingComponent;
  let fixture: ComponentFixture<FeedLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
