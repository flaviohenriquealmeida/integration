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
  }

  handleNavigation(event: IFrameEventData) {
    event.data && this.location.replaceState('fairwords' + event.data);
  }

  private getRoute(path: string): SafeUrl {
      const segment = path.split('/').slice(2).join('/');
      return this.sanitizer
        .bypassSecurityTrustResourceUrl(`${this.fairwordsDomain}/${segment}`);
  }
}
