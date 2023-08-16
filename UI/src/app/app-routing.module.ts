import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTextComponent } from './search-text/search-text.component';

const routes: Routes = [
  { path: 'search-text', component: SearchTextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
