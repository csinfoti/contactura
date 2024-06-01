import { Injectable } from '@angular/core';
import { AppState } from '../../app.state';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private state: AppState
  ) { }

  get usuarioLogado():boolean {
    return true;
  }

  get token():string{
      return this.state.token;
  }
  set token(token:string){
    this.state.token = token;
  }
}
