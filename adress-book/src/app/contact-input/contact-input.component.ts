import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Output() contactToOutput: EventEmitter<IContact> = new EventEmitter<IContact>();

  contact: IContact = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any ) {
  console.log(this.contact)
  }
}
