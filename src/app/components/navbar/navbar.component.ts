import { Component, OnInit } from '@angular/core';
import { NavLink, NAV_LINKS } from './config/nav-links.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logo: string = 'assets/images/logo.svg';
  navLinks: NavLink[] = NAV_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
