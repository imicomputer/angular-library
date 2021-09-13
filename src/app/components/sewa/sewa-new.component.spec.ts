import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewaNewComponent } from './sewa-new.component';

describe('SewaNewComponent', () => {
  let component: SewaNewComponent;
  let fixture: ComponentFixture<SewaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
