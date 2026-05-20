import { Component, signal } from '@angular/core';
import { Menu } from '../shared/menu/menu';

@Component({
  selector: 'app-root',
  imports: [Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('devas-portfolio');

  collapsed = false;

  toggleMenu() {
    this.collapsed = !this.collapsed;
  }
}
