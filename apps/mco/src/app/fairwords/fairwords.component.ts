import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { IFrameEventData } from '../shared/directives/iframe-event-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'mco-fairwords',
  templateUrl:  './fairwords.component.html',
  styleUrls: ['fairwords.component.scss']
})
export class FairwordsComponent {
  src: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  fairwordsDomain = 'http://localhost:4201'; // might come from injection token, config etc

  constructor(
    private location: Location,
    private sanitizer: DomSanitizer,
  ) {
    this.src = this.getRoute(location.path());
    // remove once integration step 2 is done
    this.simulateIframePostMessage();
  }

  handleNavigation(event: IFrameEventData) {
    event.data && this.location.go('fairwords/' + event.data);
  }

  // to be removed
  simulateIframePostMessage(): void {
      setTimeout(() => {
        window.top?.postMessage(
          { event: 'navigation', data: 'page2' },
          'http://localhost:4200'
        );
      }, 10000);
  }

  private getRoute(path: string): SafeUrl {
      const segments = path.split('/');
      segments.shift();
      segments.shift();
      const url = `${this.fairwordsDomain}/${segments.join('/')}`
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
