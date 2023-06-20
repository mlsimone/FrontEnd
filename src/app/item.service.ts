import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedAPIs } from './config';
import { Item } from './types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(protectedAPIs.ItemsAPI.endpoint);
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(protectedAPIs.ItemsAPI.endpoint, item);
  }

}
