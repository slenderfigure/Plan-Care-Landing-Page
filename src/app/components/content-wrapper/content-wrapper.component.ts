import { Component, HostListener, OnInit } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  menuState: boolean = false;

  constructor(private menuService: MobileMenuService) { }

  ngOnInit(): void {
    this.menuService.menuState$.subscribe(state => this.menuState = state);
  }

  onClickOutside(): void {
    if (this.menuState) {
      this.menuState = false;
      this.menuService.openMenu(false);
    }
  }

  @HostListener('window:keyup', ['$event'])
  onEscKeyPressed(e: KeyboardEvent): void {
    if (!this.menuState || e.key !== 'Escape') return;
    this.menuService.openMenu(false);
  }
}
