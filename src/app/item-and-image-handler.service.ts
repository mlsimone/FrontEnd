import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { protectedAPIs } from './config';
import { Observable } from 'rxjs';
import { Item, ItemAndImages } from './types';

@Injectable({
  providedIn: 'root'
})
export class ItemAndImageHandlerService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<ItemAndImages[]> {
    return this.httpClient.get<ItemAndImages[]>(protectedAPIs.ItemAndImageAPI.endpoint);
  }

  // addItem(item: ItemAndImages): Observable<Item> {
  //  return this.httpClient.post<Item>(protectedAPIs.ItemAndImageAPI.endpoint, item);

  addItem(formData: FormData): Observable<Item> {
    return this.httpClient.post<Item>(protectedAPIs.ItemAndImageAPI.endpoint, formData);
  }
}
