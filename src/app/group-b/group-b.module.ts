import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAComponent } from './item-a/item-a.component';
import { ItemBComponent } from './item-b/item-b.component';
import { ItemCComponent } from './item-c/item-c.component';
import { ItemDComponent } from './item-d/item-d.component';



@NgModule({
  declarations: [ItemAComponent, ItemBComponent, ItemCComponent, ItemDComponent],
  imports: [
    CommonModule
  ]
})
export class GroupBModule { }
