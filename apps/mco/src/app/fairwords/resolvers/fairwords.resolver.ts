import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { FairwordsService } from '../services/fairwords.service';
import { FairwordsIntegrationData } from '../services/interfaces/fairwords.integration.data';

export const fairwordsResolver: ResolveFn<FairwordsIntegrationData> = () => {
  return inject(FairwordsService).getFairwordsIntegrationData();
};
