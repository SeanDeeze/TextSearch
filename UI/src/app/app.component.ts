import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    const routeLocation: string = 'search-text';
    console.log(`Routing Application: /${routeLocation}`);
    this.router.navigate(['/', routeLocation]);
  }
}
