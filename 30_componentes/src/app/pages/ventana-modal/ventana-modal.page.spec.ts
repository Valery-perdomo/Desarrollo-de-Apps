import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentanaModalPage } from './ventana-modal.page';

describe('VentanaModalPage', () => {
  let component: VentanaModalPage;
  let fixture: ComponentFixture<VentanaModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
