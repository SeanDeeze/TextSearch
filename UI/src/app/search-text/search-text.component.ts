import { Component } from '@angular/core';
import { Book } from 'src/models/Book';
import { SearchTextService } from 'src/services/search-text.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent
{
  public books: SelectItem[] = [];
  public selectedBook: SelectItem = { label: 'Wizard of Oz', value: 3 } as SelectItem;

  constructor(_searchTextService: SearchTextService) { }
}
