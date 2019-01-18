import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestComponent } from './for-test.component';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForTestComponent]
    })
      .compileComponents();
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
});
