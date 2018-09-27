import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBottomsheetComponent } from './repo-bottomsheet.component';

describe('RepoBottomsheetComponent', () => {
  let component: RepoBottomsheetComponent;
  let fixture: ComponentFixture<RepoBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
