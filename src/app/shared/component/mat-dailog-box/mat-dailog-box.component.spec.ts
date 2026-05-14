import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDailogBoxComponent } from './mat-dailog-box.component';

describe('MatDailogBoxComponent', () => {
  let component: MatDailogBoxComponent;
  let fixture: ComponentFixture<MatDailogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDailogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
