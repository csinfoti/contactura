import { Injectable } from '@angular/core';
import { ILogin } from '../models/login.interface';
import { DaoService } from './dao.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AppSettings } from '../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  constructor(
    private daoService: DaoService,
  ) { }

  public autenticador(login: ILogin): Observable<HttpResponse<ILogin>>{
    return this.daoService.post<ILogin>(AppSettings.AUTENTICADOR, login, DaoService.MEDIA_TYPE_APP_JSON);
  }
 
}
