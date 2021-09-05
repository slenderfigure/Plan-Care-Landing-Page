import { Component, OnInit } from '@angular/core';
import { FOOTER_SN_LINKS, SocialNetworkLink } from './config/social-newtork-links.config';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  landingTitle: string = 'Plants make a positive impact on your environment.';
  landingSubTitle: string = 'Provide your house & office space with the right plants and let our Plant Care Team keep them flourishing.';
  disclaimer: string = 'You will get a 30-days free trial!';
  heroImage: string = 'assets/images/leaf.png';
  footerLinks: SocialNetworkLink[] = FOOTER_SN_LINKS;

  logoLetters = [ 
    'S', 'C', 'R', 'O', 'L', 'L', '',
    'D', 'O', 'W', 'N', '',
    'F', 'O', 'R', '', 
    'M', 'O', 'R', 'E', ''
  ];

  topStyle(index: number, deg = 250, gap = 20): { [key:string]: string | number } {
    const rotate = deg + (index + 1) * gap;
    return { transform: `rotate(${rotate}deg)` };
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
