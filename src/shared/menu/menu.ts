import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {

  menuItems = ['Home', 'Projects', 'About', 'Contact'];

  desktopCollapsed = false;
  mobileOpen = false;

  toggleDesktop() {
    this.desktopCollapsed = !this.desktopCollapsed;
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
}