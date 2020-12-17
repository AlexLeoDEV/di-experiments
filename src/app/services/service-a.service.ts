import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAService {
  conunter = 0;

  constructor() { }

  increase() {
    this.conunter++;
  }

  decrease() {
    this.conunter--;
  }
}
