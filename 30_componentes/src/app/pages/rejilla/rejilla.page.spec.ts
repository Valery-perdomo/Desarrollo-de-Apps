import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RejillaPage } from './rejilla.page';

describe('RejillaPage', () => {
  let component: RejillaPage;
  let fixture: ComponentFixture<RejillaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RejillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
