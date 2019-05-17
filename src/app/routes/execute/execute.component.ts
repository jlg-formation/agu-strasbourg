import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { map } from 'rxjs/operators';
import { Quizz } from 'src/app/Quizz';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.scss']
})
export class ExecuteComponent implements OnInit {

  q: Quizz;
  currentQuestionIndex = 0;
  constructor(private route: ActivatedRoute, private quizzService: QuizzService) { }

  ngOnInit() {
    this.route.params.pipe(map(p => p.name)).subscribe(name => {
      this.q = Object.values(Quizz.list()).find(q => q.name === name);
    });
  }

}
