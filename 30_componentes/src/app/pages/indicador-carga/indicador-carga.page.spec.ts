import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicadorCargaPage } from './indicador-carga.page';

describe('IndicadorCargaPage', () => {
  let component: IndicadorCargaPage;
  let fixture: ComponentFixture<IndicadorCargaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorCargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
