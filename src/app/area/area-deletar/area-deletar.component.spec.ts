import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeletarComponent } from './area-deletar.component';

describe('AreaDeletarComponent', () => {
  let component: AreaDeletarComponent;
  let fixture: ComponentFixture<AreaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
