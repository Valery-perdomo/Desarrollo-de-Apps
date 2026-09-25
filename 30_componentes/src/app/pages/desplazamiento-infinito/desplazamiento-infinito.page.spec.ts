import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesplazamientoInfinitoPage } from './desplazamiento-infinito.page';

describe('DesplazamientoInfinitoPage', () => {
  let component: DesplazamientoInfinitoPage;
  let fixture: ComponentFixture<DesplazamientoInfinitoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesplazamientoInfinitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
