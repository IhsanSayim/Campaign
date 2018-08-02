import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KampanyaEkleComponent } from './kampanya-ekle.component';

describe('KampanyaEkleComponent', () => {
  let component: KampanyaEkleComponent;
  let fixture: ComponentFixture<KampanyaEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KampanyaEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KampanyaEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
