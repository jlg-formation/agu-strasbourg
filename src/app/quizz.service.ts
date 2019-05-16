import { Injectable } from '@angular/core';
import { Quizz } from './Quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  current: Quizz;
  constructor() { }

  getCurrent(): Quizz {
    if (!this.current) {
      // this.current = JSON.parse(localStorage.getItem('current')) as Quizz;
      // Object.setPrototypeOf(this.current, Quizz.prototype);
      this.current = new Quizz('');
      Object.assign(this.current, JSON.parse(localStorage.getItem('current')));
    }
    return this.current;
  }

  setCurrent(q: Quizz): void {
    this.current = q;
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  
}
