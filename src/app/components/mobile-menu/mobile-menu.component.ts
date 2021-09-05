import { Component, OnInit } from '@angular/core';
import { NavLink, NAV_LINKS } from '../navbar/config/nav-links.config';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  navLinks: NavLink[] = NAV_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
