import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUploadComponent } from './ngx-upload.component';

describe('NgxUploadComponent', () => {
  let component: NgxUploadComponent;
  let fixture: ComponentFixture<NgxUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
