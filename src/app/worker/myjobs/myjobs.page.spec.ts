import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyjobsPage } from './myjobs.page';

describe('MyjobsPage', () => {
  let component: MyjobsPage;
  let fixture: ComponentFixture<MyjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
