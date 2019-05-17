import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteComponent } from './execute.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExecuteComponent', () => {
  let component: ExecuteComponent;
  let fixture: ComponentFixture<ExecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'execute/:name', component: ExecuteComponent }
        ])],
      declarations: [ExecuteComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
