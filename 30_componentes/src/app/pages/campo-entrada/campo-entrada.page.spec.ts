import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampoEntradaPage } from './campo-entrada.page';

describe('CampoEntradaPage', () => {
  let component: CampoEntradaPage;
  let fixture: ComponentFixture<CampoEntradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
