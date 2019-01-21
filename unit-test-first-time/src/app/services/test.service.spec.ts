import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject, async } from '@angular/core/testing';
import { TestService } from './test.service';

describe('TestService', () => {

  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
      imports: [HttpClientModule]
    });
  });

  // beforeEach(inject([TestService], (testService: TestService) => {
  //   service = testService;
  // }));

  beforeEach(() => {
    service = TestBed.get(TestService);
    spyOn(service, 'getOne').and.returnValue(0);
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should getGithubUserDetail2 is not null', async(() => {
    service.getGithubUserDetail2()
      .subscribe((res: Object) => {
        console.log(res)
        expect(res).not.toBeNull();
      })
    service.getGithubUserDetail()
      .then((res: Object) => {
        console.log(res)
        expect(res).not.toBeNull();
      })
  }));
});
