import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteComponent } from './asistente.component';

describe('AsistenteComponent', () => {
  let component: AsistenteComponent;
  let fixture: ComponentFixture<AsistenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenteComponent]
    });
    fixture = TestBed.createComponent(AsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
