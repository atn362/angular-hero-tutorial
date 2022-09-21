import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(num1: string, num2: string): void {
    console.log('button click')
    console.log(num1)
    console.log(num2)
    console.log(operation)

    switch(operation) {
      case "+":
        this.result = num1 + num2;
        break;
      case "-":
        this.result = num1 - num2;
        break;
      case "*":
        this.result = num1 * num2;
        break;
      case "/":
        this.result = num1 / num2;
        break;
        console.error('unknown operation');
        return;

    }
  }

}
