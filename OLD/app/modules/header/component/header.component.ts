import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollHome() {
    jQuery('html,body').animate({scrollTop: jQuery("html,body").offset().top}, 'slow');
  }

  scrollContacts() {
    jQuery('html,body').animate({scrollTop: jQuery("#contact-top").offset().top-jQuery("#nav-container").height()}, 'slow');
  }

}
