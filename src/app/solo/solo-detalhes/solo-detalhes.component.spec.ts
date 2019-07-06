import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloDetalhesComponent } from './solo-detalhes.component';

describe('SoloDetalhesComponent', () => {
  let component: SoloDetalhesComponent;
  let fixture: ComponentFixture<SoloDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
