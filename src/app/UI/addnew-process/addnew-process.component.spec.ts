import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewProcessComponent } from './addnew-process.component';

describe('AddnewProcessComponent', () => {
  let component: AddnewProcessComponent;
  let fixture: ComponentFixture<AddnewProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
