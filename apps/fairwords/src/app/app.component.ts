import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'fairwords-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fairwords';
  // this need to come from a config, because we can have fairwords
  // used by two MCO Saas deployed in a different domain. Should this come
  // with the token or should be a new config that fairwords?
  messageDestination = 'http://localhost:4200'

  constructor(private router: Router) {
    this.router.events
			.pipe(filter(e => e instanceof NavigationEnd))
			.pipe(map(e => e as NavigationEnd))
			.subscribe(e => {
          window.top?.postMessage(
            { event: 'navigation', data: e.url },
            this.messageDestination
          );
      });
  }
}
