import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/Quizz';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit {
  q: Quizz;
  constructor(private quizzService: QuizzService) {
    this.q = quizzService.getCurrent();
  }

  ngOnInit() {
  }

}
