import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor() { }
  private st: boolean = false;

  getSt(): boolean {
    return this.st;
  }

  setSt(newValue: boolean): void {
    this.st = newValue;
  }
}
