import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewaDetailComponent } from './sewa-detail.component';

describe('SewaDetailComponent', () => {
  let component: SewaDetailComponent;
  let fixture: ComponentFixture<SewaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
