import {IQuestion} from "./IQuestion";
import {IResults} from "./IResults";
import {IAnswer} from "./IAnswer";

export interface IQuiz{
  questionList: IQuestion [];
  answerList :IAnswer[];
  results: IResults | null;
}
