import { Injectable } from '@angular/core';
import { Quizz } from './Quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  current: Quizz;
  constructor() { }

  getCurrent(): Quizz {
    return this.current;
  }

  setCurrent(q: Quizz): void {
    this.current = q;
  }
}
