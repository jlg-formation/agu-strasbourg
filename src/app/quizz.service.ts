import { Injectable } from '@angular/core';
import { Quizz, MAP } from './Quizz';

export interface QuizzProgress {
  score: number;
  currentIndex: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;
  quizzProgress: QuizzProgress;

  getCurrent(): Quizz {
    if (!this.current) {
      // this.current = JSON.parse(localStorage.getItem('current')) as Quizz;
      // Object.setPrototypeOf(this.current, Quizz.prototype);
      this.current = new Quizz('');
      try {
        Object.assign(this.current, JSON.parse(localStorage.getItem('current')));
      } catch (e) { }
    }
    return this.current;
  }

  setCurrent(q: Quizz): void {
    this.current = q;
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getQuizzProgress(): QuizzProgress {
    if (!this.quizzProgress) {
      this.quizzProgress = { score: 0, currentIndex: 0 };
    }
    return this.quizzProgress;
  }

  resetQuizzProgress() {
    this.quizzProgress = undefined;
  }

  list(): Quizz[] {
    if (!localStorage.getItem(MAP)) {
        return [];
    }
    const quizzMap = JSON.parse(localStorage.getItem(MAP));
    return Object.values(quizzMap);
}



}
