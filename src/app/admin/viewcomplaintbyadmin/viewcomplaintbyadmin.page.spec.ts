import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcomplaintbyadminPage } from './viewcomplaintbyadmin.page';

describe('ViewcomplaintbyadminPage', () => {
  let component: ViewcomplaintbyadminPage;
  let fixture: ComponentFixture<ViewcomplaintbyadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomplaintbyadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcomplaintbyadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
