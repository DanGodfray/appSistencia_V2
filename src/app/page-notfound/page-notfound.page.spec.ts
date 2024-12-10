import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotfoundPage } from './page-notfound.page';

describe('PageNotfoundPage', () => {
  let component: PageNotfoundPage;
  let fixture: ComponentFixture<PageNotfoundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotfoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
