import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Quizz } from 'src/app/Quizz';
import { QuizzService, QuizzProgress } from 'src/app/quizz.service';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.scss']
})
export class ExecuteComponent implements OnInit {

  q: Quizz;
  quizzProgress: QuizzProgress;
  f = new FormGroup({
    answer: new FormControl(undefined, Validators.required)
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizzService: QuizzService) { }

  ngOnInit() {
    this.route.params.pipe(map(p => p.name)).subscribe(name => {
      this.q = Object.values(Quizz.list()).find(q => q.name === name);
      this.quizzService.setCurrent(this.q);
      this.quizzProgress = this.quizzService.getQuizzProgress();
      this.f.reset();
    });
  }

  submit() {
    console.log('submit');
    if (this.f.value.answer === this.q.questions[this.quizzProgress.currentIndex].goodAnswer) {
      this.quizzProgress.score++;
    }
    this.quizzProgress.currentIndex++;
    this.f.reset();
    if (this.quizzProgress.currentIndex === this.q.questions.length) {
      this.router.navigateByUrl('/summary');
    }
  }

}
