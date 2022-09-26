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
    if (input.length === 0) {
      return
    }

    const currentDate = new Date();
    const memo: IMemo = {
      id: currentDate.getTime(),
      text: input,
      date: currentDate,
      finished: false,
    }

    this.memoList.push(memo);
  }
  updateMemo(updatedMemo: IMemo) {

    if (updatedMemo.text.length === 0) {
      return
    }

    const memoIndex = this.memoList.findIndex(memo => memo.id === updatedMemo.id);
    if (memoIndex > -1) {
      this.memoList[memoIndex] = updatedMemo;
    }
  }

  debug() {
    console.log(this.memoList)
  }s


  deleteMemo($event: IMemo) {
    this.memoList

  }
}
