import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Quizz } from 'src/app/Quizz';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private elt: ElementRef) { }

  ngOnInit() {
    this.elt.nativeElement.querySelector('input[name=name]').focus();
  }

  submit() {
    console.log('submit');
    const q = new Quizz(this.f.value.name);
    q.save();
  }

}
