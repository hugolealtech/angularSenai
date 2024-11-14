import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoasVindasComponent } from './modal-boas-vindas.component';

describe('ModalBoasVindasComponent', () => {
  let component: ModalBoasVindasComponent;
  let fixture: ComponentFixture<ModalBoasVindasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBoasVindasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBoasVindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
