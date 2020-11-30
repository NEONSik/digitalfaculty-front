import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  buyTicketForm: FormGroup;

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

  navigateToPage() {
    this.router.navigate(['contact-form']);
   }
}
