import { Component } from '@angular/core';
import {IMemo} from "./interfaces/IMemo";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memo';

  memoList: IMemo[] = [];

  createMemo(input: string) {
    const currentDate = new Date();
    const memo: IMemo =  {id: currentDate.getDate(), text: input, date: new Date(), finished: false}

    this.memoList.push(memo)

  }
  deleteMemo(memoToDelete: IMemo) {
    this.memoList = this.memoList.filter(memo => memo.id !== memoToDelete.id)
  }

  updateMemo() {

  }



}
