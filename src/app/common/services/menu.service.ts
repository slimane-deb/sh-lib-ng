import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_API, GET_MENU} from '../../routes';
import {Menu} from '../types/menu';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  getListMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(BASE_API + GET_MENU);
  }
}
