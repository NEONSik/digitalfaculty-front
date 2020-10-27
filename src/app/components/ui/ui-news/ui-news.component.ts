import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-news',
  templateUrl: './ui-news.component.html',
  styleUrls: ['./ui-news.component.scss']
})
export class UiNewsComponent implements OnInit {
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
