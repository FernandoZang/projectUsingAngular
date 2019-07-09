import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaDetalhesComponent } from './cultura-detalhes.component';

describe('CulturaDetalhesComponent', () => {
  let component: CulturaDetalhesComponent;
  let fixture: ComponentFixture<CulturaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
