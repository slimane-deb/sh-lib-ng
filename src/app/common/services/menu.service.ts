import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_API, GET_MENU} from '../../routes';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  getListMenu() {
    return this.http.get(BASE_API + GET_MENU);
  }
}
