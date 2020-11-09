import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSearch = new EventEmitter<boolean>();
  @Input() isChild = false;
  isActiveSearch = false;
  isActiveBurger = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSearchState() {
    this.isActiveSearch = !this.isActiveSearch;
    this.onToggleSearch.emit(this.isActiveSearch);
  }

  onToggleBurger() {
    this.isActiveBurger = !this.isActiveBurger;

  }
}
