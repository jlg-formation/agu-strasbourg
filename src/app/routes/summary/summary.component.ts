import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/Quizz';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  q: Quizz;
  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    this.q = this.quizzService.getCurrent();
  }

}
