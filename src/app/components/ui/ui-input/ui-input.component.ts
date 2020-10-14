import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss']
})
export class UiInputComponent implements OnInit {
  @Input() placeholder: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
