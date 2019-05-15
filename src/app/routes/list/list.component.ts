import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/Quizz';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  quizzList: Quizz[];

  constructor() { }

  ngOnInit() {
    this.quizzList = Quizz.list();
  }

}
