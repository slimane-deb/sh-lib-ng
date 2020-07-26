import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  /// SESSION STORAGE
  setSessionStorageItem(identifer : string, item:  any) {
    sessionStorage.setItem(identifer,JSON.stringify(item));
  }

  getSessionStorageItem(identifier : string) {
    return sessionStorage.getItem(identifier) ? JSON.parse(sessionStorage.getItem(identifier)) : null;
  }
}
