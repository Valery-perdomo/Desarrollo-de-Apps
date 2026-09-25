import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectorDesplegablePage } from './selector-desplegable.page';

describe('SelectorDesplegablePage', () => {
  let component: SelectorDesplegablePage;
  let fixture: ComponentFixture<SelectorDesplegablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDesplegablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
