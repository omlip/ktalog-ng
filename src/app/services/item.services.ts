import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Item} from '../list-item/item';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  findItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/items', { responseType : 'json' });
  }
}
