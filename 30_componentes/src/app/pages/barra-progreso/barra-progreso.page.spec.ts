import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraProgresoPage } from './barra-progreso.page';

describe('BarraProgresoPage', () => {
  let component: BarraProgresoPage;
  let fixture: ComponentFixture<BarraProgresoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProgresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
