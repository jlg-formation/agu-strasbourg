import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Quizz } from 'src/app/Quizz';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.scss']
})
export class ExecuteComponent implements OnInit {

  q: Quizz;
  currentQuestionIndex = 0;
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
    });
  }

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/summary');
  }

}
