import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaDeletarComponent } from './cultura-deletar.component';

describe('CulturaDeletarComponent', () => {
  let component: CulturaDeletarComponent;
  let fixture: ComponentFixture<CulturaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
