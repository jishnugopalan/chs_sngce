import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewworkerPage } from './viewworker.page';

describe('ViewworkerPage', () => {
  let component: ViewworkerPage;
  let fixture: ComponentFixture<ViewworkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewworkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewworkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
