import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterruptorPage } from './interruptor.page';

describe('InterruptorPage', () => {
  let component: InterruptorPage;
  let fixture: ComponentFixture<InterruptorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
