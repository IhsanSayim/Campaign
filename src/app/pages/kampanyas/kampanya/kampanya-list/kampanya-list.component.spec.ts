import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KampanyaListComponent } from './kampanya-list.component';

describe('KampanyaListComponent', () => {
  let component: KampanyaListComponent;
  let fixture: ComponentFixture<KampanyaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KampanyaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KampanyaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
