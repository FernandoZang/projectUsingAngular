import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaEditarComponent } from './cultura-editar.component';

describe('CulturaEditarComponent', () => {
  let component: CulturaEditarComponent;
  let fixture: ComponentFixture<CulturaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
