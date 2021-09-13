import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuNewFormComponent } from './buku-new-form.component';

describe('BukuNewFormComponent', () => {
  let component: BukuNewFormComponent;
  let fixture: ComponentFixture<BukuNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukuNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
