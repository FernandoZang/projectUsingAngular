import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaListagemComponent } from './area-listagem.component';

describe('AreaListagemComponent', () => {
  let component: AreaListagemComponent;
  let fixture: ComponentFixture<AreaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
