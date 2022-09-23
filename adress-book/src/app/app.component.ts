import {Component, EventEmitter, Output} from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {IContact} from "./interfaces/IContact";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn : boolean = true;
  accountList: IAccount[] = [
    {username: 'admin', password: 'admin'}
  ]

  contactList: IContact[] = [
    {id: 0,
      name: 'contact1',
      address: '123 main',
      phoneNumber: '952215154',
      email: "atn362@"},
    {id: 1,
      name: 'contact1',
      address: '123 main',
      phoneNumber: '952215154',
      email: "atn362@" },
    {id: 2,
      name: 'contact1',
      address: '123 main',
      phoneNumber: '952215154',
      email: "atn362@" }
  ]



  onLogin(loginCreds: IAccount) {
    const foundAccount = this.accountList.find((account) => {
     return account.username === loginCreds.username
      && account.password === loginCreds.password
    });


    if (foundAccount === undefined){
      console.log('invalid account')
      return;
    }

    this.isLoggedIn = true;

  }

  deleteContact(deleteContact: IContact) {

  }


}
