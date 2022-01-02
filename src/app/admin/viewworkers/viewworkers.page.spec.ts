import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewworkersPage } from './viewworkers.page';

describe('ViewworkersPage', () => {
  let component: ViewworkersPage;
  let fixture: ComponentFixture<ViewworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
