import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { InsigniaPage } from './insignia.page';

describe('InsigniaPage', () => {
  let component: InsigniaPage;
  let fixture: ComponentFixture<InsigniaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsigniaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InsigniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
