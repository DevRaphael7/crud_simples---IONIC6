import { avatarImgReducer } from 'src/app/redux/reducer/avatarImg.reducer';
import { cursoReducer } from 'src/app/redux/reducer/curso.reducer';
import { userReducer } from 'src/app/redux/reducer/user.reducer';
import { AppState } from './state.model';
import { ActionReducer, State } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { pesquisaReducer } from './pesquisa.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return localStorageSync({
      keys: ['users', 'cursos'],
      rehydrate: true,
    })(reducer);
  }