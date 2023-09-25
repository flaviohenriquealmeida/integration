import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FairwordsIntegrationData } from './interfaces/fairwords.integration.data';

@Injectable()
export class FairwordsService {
  constructor(private http: HttpClient) {}

  getFairwordsIntegrationData(): Observable<FairwordsIntegrationData> {
    return of({ domain: 'http://localhost:4201', token: 'xyz' });
  }
}
