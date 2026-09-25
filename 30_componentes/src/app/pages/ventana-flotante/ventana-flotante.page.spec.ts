import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentanaFlotantePage } from './ventana-flotante.page';

describe('VentanaFlotantePage', () => {
  let component: VentanaFlotantePage;
  let fixture: ComponentFixture<VentanaFlotantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaFlotantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
