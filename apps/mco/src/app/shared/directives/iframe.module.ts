import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IFrameDirective } from './iframe.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IFrameDirective],
  exports: [IFrameDirective],
  imports: [CommonModule, RouterModule]
})
export class IFrameModule {}
