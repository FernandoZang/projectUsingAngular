import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloListagemComponent } from './solo-listagem.component';

describe('SoloListagemComponent', () => {
  let component: SoloListagemComponent;
  let fixture: ComponentFixture<SoloListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
