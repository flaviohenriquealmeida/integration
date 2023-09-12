import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageAComponent } from './page-a.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageAComponent],
  exports: [PageAComponent],
  imports: [CommonModule, RouterModule]
})
export class PageAModule {}
