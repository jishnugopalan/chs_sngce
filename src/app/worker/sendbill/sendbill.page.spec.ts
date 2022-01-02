import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendbillPage } from './sendbill.page';

describe('SendbillPage', () => {
  let component: SendbillPage;
  let fixture: ComponentFixture<SendbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendbillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
