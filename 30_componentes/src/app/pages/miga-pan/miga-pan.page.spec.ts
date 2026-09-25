import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MigaPanPage } from './miga-pan.page';

describe('MigaPanPage', () => {
  let component: MigaPanPage;
  let fixture: ComponentFixture<MigaPanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MigaPanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
