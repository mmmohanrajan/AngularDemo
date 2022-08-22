import { Component } from '@angular/core';

@Component({
  selector: 'bmi-calc',
  templateUrl: './bmi.component.html'
})
export class BmiCalcComponent {
  title = 'bmi-calc';

  bmiValue: number = 0;
  height: number = 1;
  weight: number = 2;

  bmiCalculator() {
    this.bmiValue = this.height/this.weight;
  }
}
