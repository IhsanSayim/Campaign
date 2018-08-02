import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KampanyaDetayComponent } from './kampanya-detay.component';

describe('KampanyaDetayComponent', () => {
  let component: KampanyaDetayComponent;
  let fixture: ComponentFixture<KampanyaDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KampanyaDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KampanyaDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
