import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.css']
})
export class ForTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setSomething(val: number): string {
    let returnValue: string;
    if (val - this.getRandomValue() < 1) {
      returnValue = 'Success';
    } else {
      returnValue = 'Fail';
    }
    return returnValue;
  }
  getRandomValue(): number {
    const a = 10;
    const c = 20;
    return (a + c) * 2;
  }


}
