import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchFiltersComponent } from './card-search-filters.component';

describe('CardSearchFiltersComponent', () => {
  let component: CardSearchFiltersComponent;
  let fixture: ComponentFixture<CardSearchFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSearchFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
