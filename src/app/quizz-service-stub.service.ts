import { Injectable } from '@angular/core';
import { QuizzService, QuizzProgress } from './quizz.service';
import { Quizz } from './Quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzServiceStubService implements QuizzService {
  current: Quizz;
  quizzProgress: QuizzProgress;
  getCurrent(): Quizz {
    throw new Error('Method not implemented.');
  }
  setCurrent(q: Quizz): void {
    throw new Error('Method not implemented.');
  }
  getQuizzProgress(): QuizzProgress {
    throw new Error('Method not implemented.');
  }
  resetQuizzProgress(): void {
    throw new Error('Method not implemented.');
  }
  list(): Quizz[] {
    return [new Quizz('toto')];
  }
}
