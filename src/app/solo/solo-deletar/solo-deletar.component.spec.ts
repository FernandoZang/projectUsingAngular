import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloDeletarComponent } from './solo-deletar.component';

describe('SoloDeletarComponent', () => {
  let component: SoloDeletarComponent;
  let fixture: ComponentFixture<SoloDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
