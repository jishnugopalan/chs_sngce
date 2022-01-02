import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewbillPage } from './viewbill.page';

describe('ViewbillPage', () => {
  let component: ViewbillPage;
  let fixture: ComponentFixture<ViewbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
