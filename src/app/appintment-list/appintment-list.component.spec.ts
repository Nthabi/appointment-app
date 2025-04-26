import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppintmentListComponent } from './appintment-list.component';

describe('AppintmentListComponent', () => {
  let component: AppintmentListComponent;
  let fixture: ComponentFixture<AppintmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppintmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppintmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
