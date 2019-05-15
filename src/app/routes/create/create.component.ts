import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('toto', Validators.required)
  });

  constructor(private elt: ElementRef) { }

  ngOnInit() {
    this.elt.nativeElement.querySelector('input[name=name]').focus();
  }

}
