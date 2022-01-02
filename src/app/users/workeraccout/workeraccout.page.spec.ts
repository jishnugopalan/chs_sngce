import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkeraccoutPage } from './workeraccout.page';

describe('WorkeraccoutPage', () => {
  let component: WorkeraccoutPage;
  let fixture: ComponentFixture<WorkeraccoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkeraccoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkeraccoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
