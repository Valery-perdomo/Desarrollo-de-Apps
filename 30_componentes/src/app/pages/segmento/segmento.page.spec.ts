import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegmentoPage } from './segmento.page';

describe('SegmentoPage', () => {
  let component: SegmentoPage;
  let fixture: ComponentFixture<SegmentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
