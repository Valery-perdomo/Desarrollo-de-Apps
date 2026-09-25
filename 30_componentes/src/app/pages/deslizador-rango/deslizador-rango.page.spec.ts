import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeslizadorRangoPage } from './deslizador-rango.page';

describe('DeslizadorRangoPage', () => {
  let component: DeslizadorRangoPage;
  let fixture: ComponentFixture<DeslizadorRangoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeslizadorRangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
