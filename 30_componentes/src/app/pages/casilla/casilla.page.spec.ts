import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasillaPage } from './casilla.page';

describe('CasillaPage', () => {
  let component: CasillaPage;
  let fixture: ComponentFixture<CasillaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CasillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
