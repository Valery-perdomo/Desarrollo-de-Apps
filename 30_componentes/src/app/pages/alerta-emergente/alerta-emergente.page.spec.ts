import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertaEmergentePage } from './alerta-emergente.page';

describe('AlertaEmergentePage', () => {
  let component: AlertaEmergentePage;
  let fixture: ComponentFixture<AlertaEmergentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaEmergentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
