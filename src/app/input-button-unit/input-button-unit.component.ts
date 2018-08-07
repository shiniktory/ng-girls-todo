import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World!';

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(inputElementRef) {
    this.title = inputElementRef.value;
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
