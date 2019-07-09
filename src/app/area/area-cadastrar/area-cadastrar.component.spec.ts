import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCadastrarComponent } from './area-cadastrar.component';

describe('AreaCadastrarComponent', () => {
  let component: AreaCadastrarComponent;
  let fixture: ComponentFixture<AreaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
