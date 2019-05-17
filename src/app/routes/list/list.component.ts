import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/Quizz';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  quizzList: Quizz[];

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {
    this.quizzList = this.quizzService.list();
  }

}
