import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  // @Output onDelete = new EventEmitter<IContact>;

  constructor() { }

  ngOnInit(): void {

  }

  onDeleteClick() {
    console.log('click delete')
  }

}
