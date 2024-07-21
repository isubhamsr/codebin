import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebeanComponent } from './createbean.component';

describe('CreatebeanComponent', () => {
  let component: CreatebeanComponent;
  let fixture: ComponentFixture<CreatebeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatebeanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
