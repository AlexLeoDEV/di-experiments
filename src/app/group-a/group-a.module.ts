import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemAComponent } from './item-a/item-a.component';
import { ItemBComponent } from './item-b/item-b.component';

import { ServiceAService } from '../services/service-a.service';

@NgModule({
  declarations: [ItemAComponent, ItemBComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ServiceAService
  ]
})
export class GroupAModule { }
