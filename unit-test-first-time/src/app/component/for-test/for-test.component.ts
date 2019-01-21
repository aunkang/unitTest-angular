import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.css']
})
export class ForTestComponent implements OnInit {

  constructor(private testService: TestService) { }

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

  async isPublicRepoGreaterThan(val: number): Promise<boolean> {
    let returnValue: boolean;

    await this.testService.getGithubUserDetail().then((res) => {
      console.log(res)
      if (res['public_repos'] > val) {
        returnValue = true;
      } else {
        returnValue = false;
      }
    });
    return returnValue;
  }

}
