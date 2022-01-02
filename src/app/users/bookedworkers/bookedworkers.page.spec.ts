import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookedworkersPage } from './bookedworkers.page';

describe('BookedworkersPage', () => {
  let component: BookedworkersPage;
  let fixture: ComponentFixture<BookedworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookedworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
