import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaTextoPage } from './area-texto.page';

describe('AreaTextoPage', () => {
  let component: AreaTextoPage;
  let fixture: ComponentFixture<AreaTextoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
