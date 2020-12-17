import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCComponent } from './item-c/item-c.component';
import { ItemAComponent } from './item-a/item-a.component';



@NgModule({
  declarations: [ItemCComponent, ItemAComponent],
  imports: [
    CommonModule
  ]
})
export class GroupGModule { }
