import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-carousel',
  templateUrl: './ui-carousel.component.html',
  styleUrls: ['./ui-carousel.component.scss']
})
export class UiCarouselComponent implements OnInit {
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
