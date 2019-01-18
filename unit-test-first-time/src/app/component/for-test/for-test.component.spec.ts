import { TestService } from './../../services/test.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestComponent } from './for-test.component';
import { HttpClientModule } from '@angular/common/http';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  const mockTestService = jasmine.createSpyObj('TestService', ['getGithubUserDetail']);

  const mockObject = {
    public_repos: 8,
    public_gists: 0
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForTestComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: TestService, useValue: mockTestService }
      ]
    })
      .compileComponents();

    const TestServiceSpyObj = TestBed.get(TestService);
    const mockPromise = new Promise((resolve, reject) => {
      resolve(mockObject);
    })
    TestServiceSpyObj.getGithubUserDetail.and.returnValue(mockPromise);


  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return Fail from setSomething function', () => {
    spyOn(component, 'getRandomValue').and.returnValue(10)
    expect(component.setSomething(20)).toBe('Fail')
  })

  it('should return True from isPublicRepoGreaterThan function', (async () => {
    await component.isPublicRepoGreaterThan(1).then(
      (result) => {
        expect(result).toBe(true);
      }
    );
  }));

  it('should return False from isPublicRepoGreaterThan function', (done) => {
    component.isPublicRepoGreaterThan(10).then(
      (result) => {
        expect(result).toBe(false);
        done();
      }
    );
  });

});
