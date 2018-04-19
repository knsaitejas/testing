import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoteQuotesComponent } from './edit-vote-quotes.component';

describe('EditVoteQuotesComponent', () => {
  let component: EditVoteQuotesComponent;
  let fixture: ComponentFixture<EditVoteQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVoteQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVoteQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
