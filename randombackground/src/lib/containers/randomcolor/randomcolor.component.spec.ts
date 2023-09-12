import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomcolorComponent } from './randomcolor.component';

describe('RandomcolorComponent', () => {
  let component: RandomcolorComponent;
  let fixture: ComponentFixture<RandomcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomcolorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
