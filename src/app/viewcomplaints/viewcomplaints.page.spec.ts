import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcomplaintsPage } from './viewcomplaints.page';

describe('ViewcomplaintsPage', () => {
  let component: ViewcomplaintsPage;
  let fixture: ComponentFixture<ViewcomplaintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomplaintsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcomplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
