import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageAComponent } from './page-a.component';

@NgModule({
  declarations: [PageAComponent],
  exports: [PageAComponent],
  imports: [CommonModule]
})
export class PageAModule {}
