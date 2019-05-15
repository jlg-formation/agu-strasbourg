import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private elt: ElementRef) { }

  ngOnInit() {
    this.elt.nativeElement.querySelector('input[name=name]').focus();
  }

}
