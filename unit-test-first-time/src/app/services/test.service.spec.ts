import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { TestService } from './test.service';

describe('TestService', () => {

  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(TestService);
  });




  // beforeEach(() => {
  //   service = TestBed.get(TestService);
  //   spyOn(service, 'getOne').and.returnValue(0);
  // });

  afterEach(() => {
    httpMock.verify();
  });

  it(`should expect a GET https://api.github.com/users/aunkang`, async(() => {
    const dummyData = [
      { login: 'John' },
      { login: 'Doe' }
    ];

    service.getGithubUserDetail2().subscribe((res: HttpResponse<any>) => {
      console.log(res)
    })
    const headers = { 'Test-Header': 'Test' };

    const req = httpMock.expectOne(`https://api.github.com/users/aunkang`, 'getGithubUserDetail2');
    expect(req.request.method).toBe("GET");
    expect(req.request.headers.get('Content-Type')).toBe('JSON');
    req.flush(dummyData, {
      headers: headers,
      status: 200,
      statusText: 'OK'
    })


  }));


  it(`should not expect a POST https://api.github.com/users/aunkang`, async(() => {
    const dummyData = [
      { login: 'Aun' },
      { login: 'kang' }
    ];

    service.getGithubUserDetail2().subscribe((res: HttpResponse<any>) => {
      console.log(res)
    })
    const headers = { 'Test-Header': 'Test' };

    const req = httpMock.expectOne(`https://api.github.com/users/aunkang`, 'getGithubUserDetail2');
    expect(req.request.method).not.toBe("POST");
    expect(req.request.headers.get('Content-Type')).toBe('JSON');
    req.flush(dummyData, {
      headers: headers,
      status: 200,
      statusText: 'OK'
    })


  }));

})
