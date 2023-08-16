import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { SearchTextService } from 'src/services/search-text.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit
{
  public books: SelectItem[] = [];
  selectedBook: Book;

  constructor(private searchTextService: SearchTextService) { }

  ngOnInit(): void
  {
    this.searchTextService.getBooks().subscribe((response: Book[]) =>
    {
      this.books = response.map((book: Book) =>
      {
        return { label: book.title, value: book } as SelectItem;
      })
    });
  }
}
