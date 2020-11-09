import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
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
