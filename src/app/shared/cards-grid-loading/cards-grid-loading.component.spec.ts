import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGridLoadingComponent } from './cards-grid-loading.component';

describe('CardsGridLoadingComponent', () => {
  let component: CardsGridLoadingComponent;
  let fixture: ComponentFixture<CardsGridLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGridLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsGridLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
