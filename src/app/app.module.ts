import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { OpenCameraService } from './services/openCamera/open-camera.service';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './redux/reducer/user.reducer';
import { cursoReducer } from './redux/reducer/curso.reducer';
import { ReduxServiceService } from './services/reduxService/redux-service.service';
import { PaginaUsuarioPage } from './tabs/pagina-usuario/pagina-usuario.page';
import { ComponentsModule } from './components/components.module';
import { avatarImgReducer } from './redux/reducer/avatarImg.reducer';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot({
      users: userReducer,
      cursos: cursoReducer,
      img: avatarImgReducer
    }),
    StoreDevtoolsModule.instrument(),
    ComponentsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OpenCameraService, ReduxServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
