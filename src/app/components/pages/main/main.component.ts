import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isActiveSearch = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeStateSearchWindow(value: boolean) {
    console.log(value);
    this.isActiveSearch = value;
  }

}
