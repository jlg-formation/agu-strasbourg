import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    text: new FormControl('Quelle est la capitale de ...', Validators.required),
    answer1: new FormControl('Paris', Validators.required),
    answer2: new FormControl('Lyon', Validators.required),
    answer3: new FormControl('Strasbourg', Validators.required),
    answer4: new FormControl('Nancy', Validators.required),
    goodAnswer: new FormControl('B', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

}
