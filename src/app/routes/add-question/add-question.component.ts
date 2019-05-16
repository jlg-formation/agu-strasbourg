import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { QuizzService } from 'src/app/quizz.service';
import { Question } from 'src/app/Quizz';
import { Router } from '@angular/router';

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

  constructor(
    private location: Location,
    private quizzService: QuizzService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    const q = this.quizzService.getCurrent();
    q.questions.push(this.f.value as Question);
    q.save();
    this.quizzService.setCurrent(q);
    this.router.navigateByUrl('/create-questions');
  }

  goBack() {
    this.location.back();
  }

}
