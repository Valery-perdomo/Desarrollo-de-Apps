import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificacionToastPage } from './notificacion-toast.page';

describe('NotificacionToastPage', () => {
  let component: NotificacionToastPage;
  let fixture: ComponentFixture<NotificacionToastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
