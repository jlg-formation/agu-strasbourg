import { Component, OnInit } from '@angular/core';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-save-success',
  templateUrl: './save-success.component.html',
  styleUrls: ['./save-success.component.scss']
})
export class SaveSuccessComponent implements OnInit {

  faSmileWink = faSmileWink;
  constructor() { }

  ngOnInit() {
  }

}
