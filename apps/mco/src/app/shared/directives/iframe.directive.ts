import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject, fromEvent, takeUntil, filter } from 'rxjs';
import { IFrameEventData } from './iframe-event-data';

@Directive({
  selector: '[mcoIframe]'
})
export class IFrameDirective implements OnDestroy{
  @Input() acceptedDomain = '';
  @Output() dataReceived = new EventEmitter<IFrameEventData>();
  private unsubscribe = new Subject<void>();


  constructor() {
    if (!window.top) { return }
      fromEvent<IFrameEvent>(window.top, 'message')
        .pipe(takeUntil(this.unsubscribe))
        .pipe(filter(event => event.origin === this.acceptedDomain))
        .subscribe(event => this.dataReceived.next(event.data));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

// do not export this interface
interface IFrameEvent extends Window {
  data: IFrameEventData
}
