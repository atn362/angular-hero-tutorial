import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memo';

  memoList: any[] = [];

  createMemo(input: string) {
    const currentDate = new Date();
    const memo =  {id: currentDate, text: input, date: new Date(), finished: false}
    this.memoList.push(memo)


console.log(this.memoList)


  }
  deleteMemo(memoToDelete: any) {
    this.memoList = this.memoList.filter(memo => memo.id !== memoToDelete.id)
  }

}
