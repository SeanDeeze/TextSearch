import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'UI';
  router: Router;

  constructor(injectedRouter: Router)
  {
    this.router = injectedRouter;
  }

  ngOnInit()
  {
    //this.router.navigateByUrl('/app-search-text');
  }
}
