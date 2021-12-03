import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fibonacci-numbers';

  get f() {
    return this.form.controls;
  }

  result?: any = undefined;

  form = new FormGroup({
    number: new FormControl('', Validators.required),
  });

  calculateFib() {
    let inputNumber = Number(this.form.get('number')?.value);

    if (Number.isInteger(inputNumber) && inputNumber >= 0) {
      let a = 1;
      let b = 1;
      for (let i = 3; i <= inputNumber; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      this.result = inputNumber === 0 ? "0" : b;

    } else {
      this.result = "Invalid input";
    }
  }
}
