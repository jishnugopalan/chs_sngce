import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerslistPage } from './workerslist.page';

describe('WorkerslistPage', () => {
  let component: WorkerslistPage;
  let fixture: ComponentFixture<WorkerslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
