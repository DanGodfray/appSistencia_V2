import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrAsignaturaPage } from './qr-asignatura.page';

describe('QrAsignaturaPage', () => {
  let component: QrAsignaturaPage;
  let fixture: ComponentFixture<QrAsignaturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
