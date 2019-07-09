import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaCadastrarComponent } from './cultura-cadastrar.component';

describe('CulturaCadastrarComponent', () => {
  let component: CulturaCadastrarComponent;
  let fixture: ComponentFixture<CulturaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
