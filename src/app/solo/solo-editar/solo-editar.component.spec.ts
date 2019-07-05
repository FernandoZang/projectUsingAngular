import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloEditarComponent } from './solo-editar.component';

describe('SoloEditarComponent', () => {
  let component: SoloEditarComponent;
  let fixture: ComponentFixture<SoloEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
