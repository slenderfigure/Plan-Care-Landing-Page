import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from 'src/app/services/mobile-menu.service';
import { NavLink, NAV_LINKS } from './config/nav-links.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logo: string = 'assets/images/logo.svg';
  navLinks: NavLink[] = NAV_LINKS;
  menuState: boolean = false;

  constructor(private menuService: MobileMenuService) { }

  ngOnInit(): void {
    this.menuService.menuState$.subscribe(state => this.menuState = state);
  }

  onMenuBtnClick(e: MouseEvent): void {    
    if (!this.menuState) {
      e.stopPropagation();
      this.menuService.openMenu(true);
    }
  }
}
