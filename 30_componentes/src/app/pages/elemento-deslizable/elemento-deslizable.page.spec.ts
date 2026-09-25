import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementoDeslizablePage } from './elemento-deslizable.page';

describe('ElementoDeslizablePage', () => {
  let component: ElementoDeslizablePage;
  let fixture: ComponentFixture<ElementoDeslizablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoDeslizablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
