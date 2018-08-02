import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KampanyaItemComponent } from './kampanya-item.component';

describe('KampanyaItemComponent', () => {
  let component: KampanyaItemComponent;
  let fixture: ComponentFixture<KampanyaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KampanyaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KampanyaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
