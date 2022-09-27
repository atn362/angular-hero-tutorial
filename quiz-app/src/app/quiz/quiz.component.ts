import { Component, OnInit } from '@angular/core';
import {Data} from "@angular/router";
import {DataService} from "../data.service";
import {IQuestion} from "../interfaces/IQuestion";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionList: IQuestion[]

  constructor(private dataService: DataService) {
    this.questionList = this.questionList.quiz.questionlist
  }

  ngOnInit(): void {
  }

}
