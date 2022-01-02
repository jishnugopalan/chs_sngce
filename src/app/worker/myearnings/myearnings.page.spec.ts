import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyearningsPage } from './myearnings.page';

describe('MyearningsPage', () => {
  let component: MyearningsPage;
  let fixture: ComponentFixture<MyearningsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyearningsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyearningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
