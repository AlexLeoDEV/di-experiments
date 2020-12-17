import { ServiceAService } from './../../services/service-a.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-a',
  templateUrl: './item-a.component.html',
  styleUrls: ['./item-a.component.css'],
  providers: [ServiceAService]
})
export class ItemAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
