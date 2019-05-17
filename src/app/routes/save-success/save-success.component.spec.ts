import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSuccessComponent } from './save-success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SaveSuccessComponent', () => {
  let component: SaveSuccessComponent;
  let fixture: ComponentFixture<SaveSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ SaveSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
