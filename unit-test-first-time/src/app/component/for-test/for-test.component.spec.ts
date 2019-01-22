import { TestService } from './../../services/test.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestComponent } from './for-test.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser/';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;


  const mockObject = {
    public_repos: 8,
    public_gists: 0
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForTestComponent],
      imports: [HttpClientModule],
      providers: [
        TestService
      ]
    })
      .compileComponents();

    const TestServiceSpyObj = TestBed.get(TestService);
    const mockPromise = new Promise((resolve, reject) => {
      resolve(mockObject);
    })
    spyOn(TestServiceSpyObj, 'getGithubUserDetail').and.returnValue(mockPromise);
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

  it('should return False from isPublicRepoGreaterThan function', fakeAsync(() => {
    let expectedResult: boolean;
    component.isPublicRepoGreaterThan(10).then(
      (result) => {
        expectedResult = result;
      }
    );
    tick();
    expect(expectedResult).toBe(false);
  }));

  it('should return true from checkBeforSubmit function', () => {
    const realValue = component.checkBeforSubmit();
    expect(realValue).toBe(true);
  });

  it('should disble submit button after call checkBeforSubmit function', () => {
    component.checkBeforSubmit();

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button.submit'))
    expect(button.properties.disabled).toBe(true);

  });

});
