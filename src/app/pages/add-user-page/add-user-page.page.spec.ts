import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { avatarImgReducer } from 'src/app/redux/reducer/avatarImg.reducer';
import { cursoReducer } from 'src/app/redux/reducer/curso.reducer';
import { userReducer } from 'src/app/redux/reducer/user.reducer';

import { AddUserPagePage } from './add-user-page.page';

describe('AddUserPagePage', () => {
  let component: AddUserPagePage;
  let fixture: ComponentFixture<AddUserPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserPagePage ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot({
          users: userReducer,
          cursos: cursoReducer,
          img: avatarImgReducer
        }),
      ],
      providers: [
        Store,
        Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});