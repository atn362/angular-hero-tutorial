import { Injectable } from '@angular/core';
import {IQuiz} from "./interfaces/IQuiz";


enum STATE {
  QUIZ = "QUIZ",
  RESULTS = "RESULTS"
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  quiz: IQuiz
  state: STATE = STATE.QUIZ;

  constructor() {
    this.quiz = {
      questionList: [
        {
          text: 'question 1',
          answers: [
            {text: 'answer1', isCorrect: true, isSelected: false},
            {text: 'answer2', isCorrect: false, isSelected: false},
            {text: 'answer3', isCorrect: false, isSelected: false},
            {text: 'answer4', isCorrect: false, isSelected: false}
          ]

        }
      ],
      results: null

    }
  }

}
