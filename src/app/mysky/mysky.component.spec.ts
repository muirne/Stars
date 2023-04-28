import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyskyComponent } from './mysky.component';

describe('MyskyComponent', () => {
  let component: MyskyComponent;
  let fixture: ComponentFixture<MyskyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyskyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
