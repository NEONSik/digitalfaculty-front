import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.scss']
})
export class LaboratoriesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToPage() {
    this.router.navigate(['laboratory']);
  }
}
