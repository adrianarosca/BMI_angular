import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-input',
  templateUrl: './bmi-input.component.html',
  styleUrls: ['./bmi-input.component.css']
})
export class BMIInputComponent {


  name!: string;
  weight!: number;
  height!: number;

  constructor() {
  }

  BMI!: number;

  result!: string;

  calculateBMI() {
    this.BMI = Math.round(this.weight / (this.height * this.height));

    if (this.BMI < 18.5) {
      this.result = "This is described as underweight";
    }


    if ((this.BMI >= 18.5) && (this.BMI < 24.9)) {
      this.result = "This is described as the ‘healthy range’.";
    }

    if ((this.BMI >= 24.9) && (this.BMI < 29.9)) {
      this.result = "This is described as overweight";
    }

    if ((this.BMI >= 29.9) && (this.BMI < 39.9)) {
      this.result = "This is described as obesity";
    }

    if (this.BMI >= 39.9) {
      this.result = "This is described as severe obesity";
    }

  }
}
