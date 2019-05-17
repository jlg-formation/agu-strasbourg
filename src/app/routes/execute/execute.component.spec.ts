import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteComponent } from './execute.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Quizz } from 'src/app/Quizz';
import { QuizzService } from 'src/app/quizz.service';
import { QuizzServiceStubService } from 'src/app/quizz-service-stub.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

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
      providers: [
        { provide: QuizzService, useClass: QuizzServiceStubService},
        { provide: ActivatedRoute, useValue: {
          params: of({ name: 'toto'})
        }}
      ],
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
