import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'header',
  imports: [RouterLink],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // 50px scroll threshold
  }
}
