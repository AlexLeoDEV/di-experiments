import { Injectable } from '@angular/core';

@Injectable()
export class ServiceBService {

  conunter = 0;

  constructor() { }

  increase() {
    this.conunter++;
  }

  decrease() {
    this.conunter--;
  }
}
