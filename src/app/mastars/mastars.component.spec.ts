import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastarsComponent } from './mastars.component';

describe('MastarsComponent', () => {
  let component: MastarsComponent;
  let fixture: ComponentFixture<MastarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MastarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
