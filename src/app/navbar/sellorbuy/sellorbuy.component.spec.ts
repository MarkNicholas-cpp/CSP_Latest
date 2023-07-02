import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellorbuyComponent } from './sellorbuy.component';

describe('SellorbuyComponent', () => {
  let component: SellorbuyComponent;
  let fixture: ComponentFixture<SellorbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellorbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellorbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
