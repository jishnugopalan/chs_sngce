import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveworkersPage } from './approveworkers.page';

describe('ApproveworkersPage', () => {
  let component: ApproveworkersPage;
  let fixture: ComponentFixture<ApproveworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
