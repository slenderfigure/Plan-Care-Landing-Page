import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MobileMenuService {
  private menuStateSource = new BehaviorSubject(false);
  menuState$ = this.menuStateSource.asObservable();

  constructor() { }

  openMenu(state: boolean): void {
    this.menuStateSource.next(state);
  }
}