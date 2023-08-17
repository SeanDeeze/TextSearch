import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Book } from 'src/models/Book';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService
{
  configUrl = 'api/books';

  constructor(private http: HttpClient) { }

  getBooks()
  {
    return this.http.get<Book[]>(this.configUrl);
  }
}
