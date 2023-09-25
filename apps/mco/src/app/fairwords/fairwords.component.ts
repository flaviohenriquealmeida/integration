import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { IFrameEventData } from '../shared/directives/iframe-event-data';
import { FairwordsIntegrationData } from './services/interfaces/fairwords.integration.data';

@Component({
  selector: 'mco-fairwords',
  templateUrl:  './fairwords.component.html',
  styleUrls: ['fairwords.component.scss']
})
export class FairwordsComponent {
  src: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  integrationData: FairwordsIntegrationData = { domain: '', token: '' };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer,
  ) {
    this.integrationData  = this.route.snapshot.data['integrationData'] as FairwordsIntegrationData;
    this.src = this.getRoute(location.path());
  }

  handleNavigation(event: IFrameEventData) {
    event.data && this.location.replaceState('fairwords' + event.data);
  }

  private getRoute(path: string): SafeUrl {
      const segment = path.split('/').slice(2).join('/');
      return this.sanitizer
        .bypassSecurityTrustResourceUrl(`${this.integrationData.domain}/${segment}?token=${this.integrationData.token}`);
  }
}
