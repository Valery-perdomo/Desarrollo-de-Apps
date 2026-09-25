import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizadorDesplazamientoPage } from './actualizador-desplazamiento.page';

describe('ActualizadorDesplazamientoPage', () => {
  let component: ActualizadorDesplazamientoPage;
  let fixture: ComponentFixture<ActualizadorDesplazamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizadorDesplazamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
