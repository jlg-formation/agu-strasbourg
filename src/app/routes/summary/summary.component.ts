import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/Quizz';
import { QuizzService, QuizzProgress } from 'src/app/quizz.service';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  q: Quizz;
  faSmileWink = faSmileWink;
  quizzProgress: QuizzProgress;
  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    this.q = this.quizzService.getCurrent();
    this.quizzProgress = this.quizzService.getQuizzProgress();
    this.quizzService.resetQuizzProgress();
  }

}
