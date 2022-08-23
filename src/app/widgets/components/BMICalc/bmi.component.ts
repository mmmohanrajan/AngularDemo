import { Component } from '@angular/core';

@Component({
  selector: 'bmi-calc',
  templateUrl: './bmi.component.html'
})
export class BmiCalcComponent {
  title = 'bmi-calc';

  bmiValue: number = 0;
  height: number = 0;
  weight: number = 0;

  setHeight(height:string) {
    this.height = parseInt(height);
  }

  setWeight(weight:string) {
    this.weight = parseInt(weight);
  }

  bmiCalculator() {
    this.bmiValue = this.weight/this.height;
  }
}
