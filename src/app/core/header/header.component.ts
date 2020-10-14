import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSearch = new EventEmitter<boolean>();
  isActiveSearch = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSearchState() {
    this.isActiveSearch = !this.isActiveSearch;
    this.onToggleSearch.emit(this.isActiveSearch);
  }
}
