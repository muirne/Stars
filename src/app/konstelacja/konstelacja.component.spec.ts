import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonstelacjaComponent } from './konstelacja.component';

describe('KonstelacjaComponent', () => {
  let component: KonstelacjaComponent;
  let fixture: ComponentFixture<KonstelacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonstelacjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonstelacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
