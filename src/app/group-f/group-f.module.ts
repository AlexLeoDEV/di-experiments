import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAComponent } from './item-a/item-a.component';
import { ItemBComponent } from './item-b/item-b.component';
import { ItemCComponent } from './item-c/item-c.component';



@NgModule({
  declarations: [ItemAComponent, ItemBComponent, ItemCComponent],
  imports: [
    CommonModule
  ]
})
export class GroupFModule { }
