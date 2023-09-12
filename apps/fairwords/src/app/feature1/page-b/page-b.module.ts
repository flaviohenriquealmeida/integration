import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageBComponent } from './page-b.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageBComponent],
  exports: [PageBComponent],
  imports: [CommonModule, RouterModule]
})
export class PageBModule {}
