import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyListComponent } from './biography-list.component';

describe('BiographyListComponent', () => {
  let component: BiographyListComponent;
  let fixture: ComponentFixture<BiographyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiographyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
