import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaListagemComponent } from './cultura-listagem.component';

describe('CulturaListagemComponent', () => {
  let component: CulturaListagemComponent;
  let fixture: ComponentFixture<CulturaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
