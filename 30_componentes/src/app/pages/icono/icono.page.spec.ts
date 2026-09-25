import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconoPage } from './icono.page';

describe('IconoPage', () => {
  let component: IconoPage;
  let fixture: ComponentFixture<IconoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
