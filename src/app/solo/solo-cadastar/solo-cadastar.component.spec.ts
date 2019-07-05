import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCadastarComponent } from './solo-cadastar.component';

describe('SoloCadastarComponent', () => {
  let component: SoloCadastarComponent;
  let fixture: ComponentFixture<SoloCadastarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloCadastarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCadastarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
