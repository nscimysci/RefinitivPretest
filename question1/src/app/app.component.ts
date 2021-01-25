import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'question1';
  number1: number = 0;
  isCol3: boolean = false;
  selectValues: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.selectValues = 1;
    console.log('isPrime');
    console.log(this.isPrime(0));


    console.log('isFibonacci');
    console.log(this.isFibonacci(5));
  }

  checkNumber(arg: number) {

    let result = Math.round(arg);


    if (result < 0) {
      result = 1;
    }

    console.log('result');
    console.log(result);

    this.number1 = result;


    this.selectValue(this.selectValues);

  }


  isPrime(num: number) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  // isFibonacci(num: number): any {
  //   if (num <= 1) return 1;

  //   return this.isFibonacci(num - 1) + this.isFibonacci(num - 2);
  // }

  // isFibonacci(num: number) {
  //   if (this.isFibonacci(5 * (num * num) - 4) || this.isFibonacci(5 * (num * num) + 4)) {
  //     return true;
  //   } else { return false; }
  // }

  // isFibonacci(num: number) {
  //   var num1 = 0;
  //   var num2 = 1;
  //   var sum;
  //   var i = 0;
  //   for (i = 0; i < num; i++) {
  //     sum = num1 + num2;
  //     num1 = num2;
  //     num2 = sum;
  //   }
  //   return num2;
  // }

  isFibonacci(num: number) {
    if (num === 0 || num === 1) {
      return true;
    }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while (count <= num) {
      if (prev + count === num) {
        return true;
      };
      temp = prev;
      prev = count;
      count += temp;
    };
    return false;

  }



  selectValue(arg: number) {
    this.selectValues = arg;
    // console.log(arg);
    // console.log(`this.number1 : ${this.number1}`);
    // console.log(`this.isPrime(this.number1) : ${this.isPrime(this.number1)}`);

    if (arg == 1) {

      console.log(arg);
      console.log(`this.number1 : ${this.number1}`);
      console.log(`this.isPrime(this.number1) : ${this.isPrime(this.number1)}`);
      this.isCol3 = this.isPrime(this.number1);

    } else if (arg == 2) {


      console.log(arg);
      console.log(`this.number1 : ${this.number1}`);
      console.log(`this.isFibonacci(this.number1) : ${this.isFibonacci(this.number1)}`);
      this.isCol3 = this.isFibonacci(this.number1);
    }

    // switch (arg) {
    //   case 1:

    //     this.isCol3 = this.isPrime(this.number1);

    //     break;
    //   case 2:
    //     this.isCol3 = this.isFibonacci(this.number1);

    //     break;
    //   default:
    //     break;
    // }

    console.log(`this.isCol3 : ${this.isCol3}`);
  }



}
